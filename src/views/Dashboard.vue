<template>
  <v-container class="">
    <v-row>
      <v-col cols="12">
        <v-sheet elevation="4" class="rounded-lg overflow-hidden">
          <v-img :src="card" />
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-subheader class="font-weight-bold">Due date exceed</v-subheader>
        <v-expansion-panels accordion v-if="returnDateExceed.length !== 0">
          <v-expansion-panel v-for="(item, i) in returnDateExceed" :key="i">
            <v-expansion-panel-header class="pa-3">
              <v-row>
                <v-col class="flex-grow-0">
                  <v-avatar color="primary" rounded>
                    <span class="white--text headline">CJ</span>
                  </v-avatar>
                </v-col>
                <v-col class="pl-0">
                  <h4 class="text-h5 font-weight-bold mb-2 mt-n1">
                    {{ item.book.book.title }}
                  </h4>
                  <template v-for="author in item.book.book.Authors.items">
                    <p class="mb-0" :key="author.author.id">
                      {{ author.author.name }}
                    </p>
                  </template>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-3">
              <v-row>
                <v-col>
                  <p class="mb-0">Issue Date</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <v-chip outlined color="primary" small>
                    {{ format(item.createdAt) }}
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="mb-0">Return Date</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <v-chip outlined color="error" small>
                    {{ format(item.due_date) }}
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="mb-0">Fine</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <p class="font-weight-bold">20/-</p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card v-else>
          <v-card-title>No Books To Show</v-card-title>
        </v-card>
        <v-subheader class="font-weight-bold">Issued</v-subheader>
        <v-expansion-panels accordion v-if="returnDateRemaining.length !== 0">
          <v-expansion-panel v-for="(item, i) in returnDateRemaining" :key="i">
            <v-expansion-panel-header class="pa-3">
              <v-row>
                <v-col class="flex-grow-0">
                  <v-avatar color="primary" rounded>
                    <span class="white--text headline">CJ</span>
                  </v-avatar>
                </v-col>
                <v-col class="pl-0">
                  <h4 class="text-h5 font-weight-bold mb-2 mt-n1">
                    {{ item.book.book.title }}
                  </h4>
                  <template v-for="author in item.book.book.Authors.items">
                    <p class="mb-0" :key="author.author.id">
                      {{ author.author.name }}
                    </p>
                  </template>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-3">
              <v-row>
                <v-col>
                  <p class="mb-0">Issue Date</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <v-chip outlined color="primary" small>
                    {{ format(item.createdAt) }}
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="mb-0">Return Date</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <v-chip outlined color="error" small>
                    {{ format(item.due_date) }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card v-else>
          <v-card-title>No Books To Show</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth, Storage, API } from "aws-amplify";
import { listTransactionsCustom } from "../graphql/custom";

export default {
  name: "Dashboard",
  data: () => ({
    card: undefined,
    user: null,
    transactions: [],
  }),
  methods: {
    format(date) {
      let d = new Date(date.split("T")[0]).toDateString().split(" ");
      return d[2] + " " + d[1] + ", " + d[3] + " " + d[0];
    },
  },
  computed: {
    returnDateExceed() {
      return this.transactions.filter((x) => {
        return x.fine !== 0;
      });
    },
    returnDateRemaining() {
      return this.transactions.filter((x) => {
        return x.fine === 0;
      });
    },
  },
  async created() {
    this.user = await Auth.currentAuthenticatedUser();
    this.card = await Storage.get("card/" + this.user.username + ".png");
    const {
      data: {
        listTransactions: { items: transactions },
      },
    } = await API.graphql({
      query: listTransactionsCustom,
      variables: {
        filter: {
          status: {
            eq: "ISSUED",
          },
        },
      },
    });
    this.transactions = transactions;
    console.log(this.transactions);
  },
};
</script>

<style lang="scss"></style>

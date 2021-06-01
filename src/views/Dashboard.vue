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
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in 3" :key="i">
            <v-expansion-panel-header class="pa-3">
              <v-row>
                <v-col class="flex-grow-0">
                  <v-avatar color="primary" rounded>
                    <span class="white--text headline">CJ</span>
                  </v-avatar>
                </v-col>
                <v-col class="pl-0">
                  <h4 class="text-h5 font-weight-bold mb-2 mt-n1">Book name</h4>
                  <p class="mb-0">Author names</p>
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
                    12<sup>th</sup> April, 2021
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="mb-0">Return Date</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <v-chip outlined color="error" small
                    >12<sup>th</sup> April, 2021
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
        <v-subheader class="font-weight-bold">Due date comming</v-subheader>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in 3" :key="i">
            <v-expansion-panel-header class="pa-3">
              <v-row>
                <v-col class="flex-grow-0">
                  <v-sheet
                    width="50px"
                    elevation="2"
                    height="50px"
                    rounded
                    class="primary"
                  ></v-sheet>
                </v-col>
                <v-col class="pl-0">
                  <h4 class="text-h5 font-weight-bold mb-2 mt-n1">Book name</h4>
                  <p class="mb-0">Author names</p>
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
                  <v-chip outlined color="primary" small
                    >12<sup>th</sup> April, 2021
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="mb-0">Return Date</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <v-chip outlined color="error" small
                    >12<sup>th</sup> April, 2021
                  </v-chip>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-subheader class="font-weight-bold">Issued</v-subheader>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in 3" :key="i">
            <v-expansion-panel-header class="pa-3">
              <v-row>
                <v-col class="flex-grow-0">
                  <v-sheet
                    width="50px"
                    elevation="2"
                    height="50px"
                    rounded
                    class="primary"
                  ></v-sheet>
                </v-col>
                <v-col class="pl-0">
                  <h4 class="text-h5 font-weight-bold mb-2 mt-n1">Book name</h4>
                  <p class="mb-0">Author names</p>
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
                  <v-chip outlined color="primary" small
                    >12<sup>th</sup> April, 2021
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="mb-0">Return Date</p>
                </v-col>
                <v-spacer />
                <v-col>
                  <v-chip outlined color="error" small
                    >12<sup>th</sup> April, 2021
                  </v-chip>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import card from "@/assets/images/card.png";

export default {
  name: "Dashboard",
  data: () => ({
    card: card,
  }),
};
</script>

<style lang="scss"></style>

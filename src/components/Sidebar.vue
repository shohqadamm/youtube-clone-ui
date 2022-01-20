<template>
  <v-navigation-drawer
    :temporary="videoIsPlaying"
    :mini-variant.sync="showFullDrawer"
    class="scrollbar"
    dark
    clipped
    app
    width="240"
    color="dark"
    v-model="showDrawer"
    mini-variant-width="72"
  >
    <v-list :dense="!showFullDrawer" class="scroller test">
      <div class="youtube-brand-header" v-if="videoIsPlaying">
        <v-list-item link class="px-5-5">
          <v-list-item-icon><v-icon>mdi-menu</v-icon></v-list-item-icon>
          <v-list-item-content>
            <img
              src="../assets/YouTube-Logo.wine.svg"
              alt="YouTube"
              width="10"
            />
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-list-item-group multiple color="darken">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-compass-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Explore</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-youtube-subscription</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Subscriptions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider v-if="!showFullDrawer" />

      <v-list-item-group multiple color="darken">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-play-box-multiple-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Library</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-history</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-play-box-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Your videos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-clock-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Watch later</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-thumb-up-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Liked videos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider v-if="!showFullDrawer" />

      <v-list-item-group v-if="!showFullDrawer" multiple color="dark">
        <v-list-item-title>Subscriptions</v-list-item-title>
        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon> mdi-account </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Samer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Chilmusdf</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>traversy media</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Browse channels</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider v-if="!showFullDrawer" />

      <v-list-item-group v-if="!showFullDrawer" multiple color="dark">
        <v-list-item-title>More</v-list-item-title>
        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon> mdi-youtube-gaming </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Gaming</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-access-point</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Live</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-hanger</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Fashion & Beauty</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Learning</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-basketball</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Sports</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider v-if="!showFullDrawer" />

      <v-list-item-group multiple color="dark">
        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-flag-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Report history</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-help-circle-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="!showFullDrawer" link>
          <v-list-item-icon>
            <v-icon>mdi-message-alert-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Send feedback</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider v-if="!showFullDrawer" />
    </v-list>

    <v-list-item v-if="!showFullDrawer" class="d-flex flex-wrap">
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >About</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Press</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Copyright</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Contact us</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Creators</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Advertise</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Developers</a
      >
    </v-list-item>

    <v-list-item v-if="!showFullDrawer" class="d-flex flex-wrap">
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Terms</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Privacy</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Policy & Safety</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >How YouTube works</a
      >
      <a
        href="#"
        class="
          text-caption
          grey--text
          text--lighten-1
          font-weight-medium
          text-decoration-none
          px-2
        "
        >Test new features</a
      >
    </v-list-item>
    <v-list-item v-if="!showFullDrawer" link>
      <p class="text-caption grey--text text--darken-1">© 2022 Google LLC</p>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      videoIsPlaying: (state) => state.youtube.videoIsPlaying,
      showFullDrawer: (state) => state.youtube.showFullDrawer,
    }),

    showDrawer: {
      get() {
        return this.$store.state.youtube.showDrawer;
      },
      set(value) {
        this.$store.commit("toggleShowDrawer", value);
      },
    },
    showFullDrawer: {
      get() {
        return this.$store.state.youtube.showFullDrawer;
      },
      set(value) {
        this.$store.commit("toggleShowFullDrawer", value);
      },
    },
  },
};
</script>

<style>
</style>
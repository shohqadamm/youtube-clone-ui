<template>
  <div class="mt-6">
      <v-divider class="mx-5">

      </v-divider>
    
  <v-row justify="space-around">
    <v-col
      cols="12"
      sm="10"
      md="8"
    >
      <v-sheet
        class="py-4 px-1"
      >
        <v-chip-group
          multiple
          active-class="darken--text"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>

<v-divider></v-divider>
  </div>
</template>

<script>
export default {
 data: () => ({
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
         'asdf',
        'asdf Improvement',
        'ffs',
        'vcxzv',
        'Drawtrwewers',
        'Shopphfging',
        'Avcbnrt',
        'Tejkjhch',
        'Creafgdtive dfghWriting',
      ],
    }),
}
</script>

<style>

</style>
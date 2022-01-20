const state ={
    showDrawer: true,
    showFullDrawer: false,
    videoIsPlaying: false,
}

const getters ={}
const actions={}
const mutations={
    toggleShowFullDrawer: (state, value)=>(state.showFullDrawer=value),
    toggleShowDrawer: (state, value)=>(state.showDrawer=value),
    toggleVideoIsPlaying: (state, value)=>(state.videoIsPlaying=value),
}

export default{
state,
getters,
actions,
mutations

}
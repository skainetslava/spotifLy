
import { createSelector } from "reselect";

import { IStore } from "src/store";


const SEARCH_TRACKS = (state: IStore) => state.search.tracks;

export const getSearchTracks = createSelector(
    [SEARCH_TRACKS],
    (tracks) => tracks,
)

const SEARCH_ARTISTS = (state: IStore) => state.search.artists;

export const getSearchArtists = createSelector(
    [SEARCH_ARTISTS],
    (artists) => artists,
)

const SEARCHING_VALUE = (state: IStore) => state.search.searchingValue;

export const getSearchingValue = createSelector(
    [SEARCHING_VALUE],
    (value) => value,
)

const PLAYER_SOURCE = (state: IStore) => state.player.source;

export const getCurrentAudio = createSelector(
    [PLAYER_SOURCE],
    (data) =>  data,
)

const PLAYER_PLAYING = (state: IStore) => state.player.isPlaying;

export const getPlayerAudioStatus = createSelector(
    [PLAYER_PLAYING],
    (data) => data,
)

const PLAYER_PAUSING = (state: IStore) => state.player.isPausing;

export const getPausingAudioStatus = createSelector(
    [PLAYER_PAUSING],
    (data) => data,
)

const PLAYER_VOLUME = (state: IStore) => state.player.volume;

export const getVolume = createSelector(
    [PLAYER_VOLUME],
    (volume) => volume,
)

const PLAYER_PLAYLIST = (state: IStore) => state.player.playlist;

export const getPlaylist = createSelector(
    [PLAYER_PLAYLIST],
    (playlist) => playlist,
)

const PLAYER_TIMING = (state: IStore) => state.player.timing;

export const getDuration = createSelector(
    [PLAYER_TIMING],
    (timing) => timing,
)

const PLAYER_REPEAT = (state: IStore) => state.player.isRepeat;

export const getRepeatStatus = createSelector(
    [PLAYER_REPEAT],
    (isRepeat) => isRepeat,
)


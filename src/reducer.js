
import { resourceURIs } from './Util.js';

export const ACTION_TYPES = {
	LOADED: 'LOADED',
  FULLSCREEN: 'FULLSCREEN',
  MUTE: 'MUTE',
  YOUTUBE: 'YOUTUBE',
  READY: 'READY',
  TOGGLE_VIDEO: 'TOGGLE_VIDEO',
  SET_LOADING_SEARCH: 'SET_LOADING_SEARCH',
  CHANGE_STAR: 'CHANGE_STAR',
  RESET: 'RESET',
  PAGINATE: 'PAGINATE',
  SEARCH_BY_DISTANCE: 'SEARCH_BY_DISTANCE',
  SEARCH_BY_PLANET_COUNT: 'SEARCH_BY_PLANET_COUNT',
  SEARCH_BY_NAME: 'SEARCH_BY_NAME',
  SET_ERROR: 'SET_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  SET_SEARCH_OPTION: 'SET_SEARCH_OPTION',
  SET_SEARCH: 'SET_SEARCH',
  SET_SORT: 'SET_SORT',
  SET_PAGE: 'SET_PAGE',
  SET_SIZE: 'SET_SIZE',

};

const initialState = {
starResource: null,
      resourceURI: resourceURIs.stars,
      page: 1,
      size: 20,
      sort: "numberOfPlanets,desc",
      stars: null,
      headings: [],
      loading: true,
      currentStar: null,
      currentStarIndex: 0,
      planets: null,
      planetHeadings: [],
      search: "",
      searchBy: "",
      next: null,
      prev: null,
      first: null,
      last: null,
      names: "",
      error: "",
      networkError: false,
      mute: false,
      fullScreen: false,
      yt: null,
      ready: false,
      noVideo: false,
      loadingSearch: false,
};

export default (state = initialState, action) => {
	switch(action.type) {
		case ACTION_TYPES.LOADED:
			return {
				...state
			}
    case ACTION_TYPES.FULLSCREEN:
      return {
        ...state,
        fullScreen: action.payload
      }
    case ACTION_TYPES.MUTE:
      return {
        ...state,
        mute: action.payload
      }
    case ACTION_TYPES.YOUTUBE:
      return {
        ...state,
        yt: action.payload
      }
    case ACTION_TYPES.READY:
      return {
        ...state,
        ready: action.payload
      }
    case ACTION_TYPES.TOGGLE_VIDEO:
      return {
        ...state,
        noVideo: !state.noVideo
      }
    case ACTION_TYPES.SET_LOADING_SEARCH:
      return {
        ...state,
        loadingSearch: action.payload
      }
    case ACTION_TYPES.CHANGE_STAR:
      return {
        ...state,
        ...action.payload
      }
    case ACTION_TYPES.RESET:
      return {
        ...state,
        ...action.payload
      }
    case ACTION_TYPES.PAGINATE:
      return {
        ...state,
        ...action.payload
      }
    case ACTION_TYPES.SEARCH_BY_DISTANCE:
      return {
        ...state,
        ...action.payload
      }
    case ACTION_TYPES.SEARCH_BY_PLANET_COUNT:
      return {
        ...state,
        ...action.payload
      }
    case ACTION_TYPES.SEARCH_BY_NAME:
      return {
        ...state,
        ...action.payload
      }
    case ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loadingSearch: false
      }
    case ACTION_TYPES.NETWORK_ERROR:
      return {
        ...state,
        networkError: true
      }
    case ACTION_TYPES.SET_SEARCH_OPTION:
      return {
        ...state,
        searchBy: action.payload
      }
    case ACTION_TYPES.SET_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    case ACTION_TYPES.SET_SORT:
      return {
        ...state,
        sort: action.payload
      }
    case ACTION_TYPES.SET_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case ACTION_TYPES.SET_SIZE:
      return {
        ...state,
        size: action.payload
      }
		default:
			return state;
	}

}


export const toggleFullScreen = (fullscreen) => dispatch => {
  dispatch({
    type: ACTION_TYPES.FULLSCREEN,
    payload: fullscreen 
  })
}
export const toggleMute = (mute) => (dispatch, getState) => {
  var yt = getState().yt;
  mute ? yt.mute(): yt.unMute();
  dispatch({
    type: ACTION_TYPES.MUTE,
    payload: mute
  })
}
export const saveYouTube = (yt) => dispatch => {
  dispatch({
    type: ACTION_TYPES.YOUTUBE,
    payload: yt
  })
}
export const setReady = (ready) => dispatch => {
  dispatch({
    type: ACTION_TYPES.READY,
    payload: ready
  })
}

export const toggleVideo = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.TOGGLE_VIDEO,
  })
}

export const setLoadingSearch = (loadingSearch) => (dispatch, getState) => {
  dispatch({
    type: ACTION_TYPES.SET_LOADING_SEARCH,
    payload: loadingSearch
  })
}

export const changeStar = (newStar) => dispatch => {

  dispatch({
    type: ACTION_TYPES.CHANGE_STAR,
    payload: newStar
  })
}

export const reset = (payload) => dispatch => {
  dispatch({
    type: ACTION_TYPES.RESET,
    payload: payload
  })
}

export const changePage = (payload) => dispatch => {
  dispatch({
    type: ACTION_TYPES.PAGINATE,
    payload: payload
  })
}

export const searchByDistance = (payload) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SEARCH_BY_DISTANCE,
    payload: payload
  })
}

export const searchByPlanetCount = (payload) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SEARCH_BY_PLANET_COUNT,
    payload: payload
  })
}

export const searchByName = (payload) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SEARCH_BY_NAME,
    payload: payload
  })

}

export const setError = (error) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_ERROR,
    payload: error.error
  })
}

export const searchOptionChange = (searchOption) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_SEARCH_OPTION,
    payload: searchOption.searchBy
  })
}

export const searchChange = (search) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_SEARCH,
    payload: search.search
  })
}
export const sortChange = (sort) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_SORT,
    payload: sort.sort
  })
}

export const pageChange = (page) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_PAGE,
    payload: page.page
  })
}

export const sizeChange = (size) => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_SIZE,
    payload: size.size
  })
}

export const showNetworkError = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.NETWORK_ERROR,
    // payload: size.size
  })
}

//showNetworkError
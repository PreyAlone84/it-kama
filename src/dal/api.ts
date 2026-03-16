// import { TRACKS_MOCK } from "./../constants/mock_data";

export type GetTrackDetailsOutputData = {
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type GetTrackDetailsOutput = {
  data: GetTrackDetailsOutputData;
};

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;

  return {
    "api-key": apiKey
  };
};

export const getTrack = (trackId: string) => {
  // API
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: prepareHeaders()
    }
  ).then((res) => res.json());

  /* MOCK */
  // const promise = Promise.resolve(
  //   TRACKS_MOCK.data.find((track) => trackId === track.id)
  // );

  return promise;
};

type Attachment = {
  url: string;
};

type TrackDetailsAttributes = {
  title: string;
  attachments: Array<Attachment>;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackDetailsAttributes;
};

type GetTrackListOutput = { data: Array<TrackListItemOutput> };

export const getTracks = () => {
  // API
  const promise: Promise<GetTrackListOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: prepareHeaders()
    }
  ).then((res) => res.json());

  // MOCK
  // const promise = Promise.resolve(TRACKS_MOCK);

  return promise;
};

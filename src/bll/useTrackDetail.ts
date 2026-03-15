import { useEffect, useState } from "react";
import { getTrack, type GetTrackDetailsOutputData } from "../dal/api";

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] =
    useState<GetTrackDetailsOutputData | null>(null);

  useEffect(() => {
    if (!trackId) {
      return;
    }

    /* MOCK */
    // getTrack(trackId).then((json) => setTrackDetails(json));
    /* API */
    getTrack(trackId).then((json) => setTrackDetails(json.data));
  }, [trackId, setTrackDetails]);

  return { trackDetails };
}

import { useTrackDetail } from "../bll/useTrackDetail";

type TrackDetailsProps = {
  trackId: string | null;
};

export const TrackDetail = ({ trackId }: TrackDetailsProps) => {
  const { trackDetails } = useTrackDetail(trackId);

  return (
    <div className="w-[500px] border border-purple-400 rounded-lg p-4">
      <h2 className="text-2xl font-medium text-orange-700">Details</h2>
      {trackDetails === null ? (
        "Track is not selected"
      ) : (
        <div>
          {trackDetails ? (
            <>
              <h3 className="text-xl font-bold text-ellipsis whitespace-nowrap max-w-full overflow-hidden">
                {trackDetails.attributes.title}
              </h3>
              <h4>Lyrics</h4>
              <p>{trackDetails.attributes.lyrics ?? "no lyrics"}</p>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

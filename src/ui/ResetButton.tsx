export const ResetButton = ({
  setSelectedTrackId,
  setSelectedTrack
}: {
  setSelectedTrackId: (item: null | number) => void;
  setSelectedTrack: (item: null | number) => void;
}) => {
  return (
    <button
      style={{ width: "fit-content" }}
      onClick={() => {
        setSelectedTrackId(null);
        setSelectedTrack(null);
      }}
    >
      Reset selection
    </button>
  );
};

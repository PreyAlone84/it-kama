import { TrackItem } from "./TrackItem";
import { useTracks } from "../bll/useTracks";
import styles from "./TrackList.module.scss";

type TrackListProps = {
  trackId: string | null;
  setTrackId: (trackId: string) => void;
};

export const TrackList = ({ trackId, setTrackId }: TrackListProps) => {
  const { tracks } = useTracks();

  if (tracks === null) {
    return <div>Loading tracks...</div>;
  }

  if (tracks && tracks.length === 0) {
    return <div>No tracks available</div>;
  }

  const handleSelect = (trackId: string) => {
    setTrackId?.(trackId);
  };

  return (
    <ul className={styles.list}>
      {tracks.map((track) => {
        return (
          <TrackItem
            key={track.id}
            track={track}
            onSelect={handleSelect}
            isSelected={track.id === trackId}
          />
        );
      })}
      ;
    </ul>
  );
};

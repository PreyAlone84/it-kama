import type { TrackListItemOutput } from "../dal/api";
import styles from "./TrackItem.module.scss";
import clsx from "clsx";

type TrackItemProps = {
  track: TrackListItemOutput;
  onSelect: (trackId: string) => void;
  isSelected: boolean;
};

export const TrackItem = ({ track, onSelect, isSelected }: TrackItemProps) => {
  const handleClick = () => onSelect?.(track.id);
  return (
    <li
      key={track.id}
      className={clsx(styles.item, { [styles.bordered]: isSelected })}
    >
      <div
        className={clsx(styles.title, "text-orange-700")}
        onClick={handleClick}
      >
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
};

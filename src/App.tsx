import "./App.css";
import { TrackList } from "./ui/TrackList";
import { TrackDetail } from "./ui/TrackDetail";
import { useTrackId } from "./bll/useTrackId";

export function App() {
  const { trackId, setTrackId } = useTrackId();

  return (
    <>
      <div className="flex flex-col gap-8 w-full justify-center p-8">
        <div className="flex gap-8 justify-center">
          <TrackList trackId={trackId} setTrackId={setTrackId} />
          <TrackDetail trackId={trackId} />
        </div>
      </div>
    </>
  );
}

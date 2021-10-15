import TimeEntry from 'components/molecules/TimeEntry/TimeEntry';
import { DayData, TimeEntryData } from 'model/model';
import styles from './DayView.module.scss';

interface Props {
  data: DayData;
}

function DayView({ data }: Props) {
  return (
    <div className={styles.main}>
      <div>
        {data.date} Total: {data.total}
      </div>
      {data.timeEntries.map((timeEmtry: TimeEntryData) => (
        <TimeEntry key={timeEmtry.id} {...timeEmtry} />
      ))}
    </div>
  );
}

export default DayView;

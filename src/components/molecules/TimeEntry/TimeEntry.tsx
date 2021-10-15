import TextField from 'components/atoms/TextField/TextField';
import { TimeEntryData } from 'model/model';
import styles from './TimeEntry.module.scss';

interface Props extends TimeEntryData {}

function TimeEntry({ taskName, startTime, endTime, diff }: Props) {
  return (
    <div className={styles.main}>
      <TextField placeholder="Task Name" defaultValue={taskName} />
      <TextField placeholder="10:00" defaultValue={startTime} format="time" />
      <TextField placeholder="10:00" defaultValue={endTime} format="time" />
      <div>{diff}</div>
    </div>
  );
}

export default TimeEntry;

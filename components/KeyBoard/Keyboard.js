import styles from "./Keyboard.module.css";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import KeyboardCapslockIcon from "@material-ui/icons/KeyboardCapslock";
import SpaceBarIcon from "@material-ui/icons/SpaceBar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import BackspaceIcon from "@material-ui/icons/Backspace";
import TransitEnterexitIcon from "@material-ui/icons/TransitEnterexit";

const Keyboard = () => {
  return (
    <>
      <textarea className="use-keyboard-input"></textarea>

      <style jsx>{`
        textarea {
          placeholder: "textarea";
          position: relative;
          top: 50px;
          background: #e6e6fa;
          width: 40%;
          height: 30%;
        }
      `}</style>

      <div className={styles.keyboard}>
        <div className={styles.keyboard__keys}>
          <button type="button" className={styles.keyboard__key}>
            1
          </button>
          <button type="button" className={styles.keyboard__key}>
            2
          </button>
          <button type="button" className={styles.keyboard__key}>
            3
          </button>
          <button type="button" className={styles.keyboard__key}>
            4
          </button>
          <button type="button" className={styles.keyboard__key}>
            5
          </button>
          <button type="button" className={styles.keyboard__key}>
            6
          </button>
          <button type="button" className={styles.keyboard__key}>
            7
          </button>
          <button type="button" className={styles.keyboard__key}>
            8
          </button>
          <button type="button" className={styles.keyboard__key}>
            9
          </button>
          <button
            type="button"
            className={`${styles.keyboard__key} ${styles.keyboard__key__wide}`}
          >
            <BackspaceIcon />
          </button>
          <br />
          <button type="button" className={styles.keyboard__key}>
            q
          </button>
          <button type="button" className={styles.keyboard__key}>
            w
          </button>
          <button type="button" className={styles.keyboard__key}>
            e
          </button>
          <button type="button" className={styles.keyboard__key}>
            r
          </button>
          <button type="button" className={styles.keyboard__key}>
            t
          </button>
          <button type="button" className={styles.keyboard__key}>
            y
          </button>
          <button type="button" className={styles.keyboard__key}>
            u
          </button>
          <button type="button" className={styles.keyboard__key}>
            i
          </button>
          <button type="button" className={styles.keyboard__key}>
            o
          </button>
          <button type="button" className={styles.keyboard__key}>
            p
          </button>

          <br />
          <button
            type="button"
            className={`${styles.keyboard__key} ${styles.keyboard__key__wide} ${styles.keyboard__key__activatable}`}
          >
            <KeyboardCapslockIcon />
          </button>
          <button type="button" className={styles.keyboard__key}>
            a
          </button>
          <button type="button" className={styles.keyboard__key}>
            s
          </button>
          <button type="button" className={styles.keyboard__key}>
            d
          </button>
          <button type="button" className={styles.keyboard__key}>
            f
          </button>
          <button type="button" className={styles.keyboard__key}>
            g
          </button>
          <button type="button" className={styles.keyboard__key}>
            h
          </button>
          <button type="button" className={styles.keyboard__key}>
            j
          </button>
          <button type="button" className={styles.keyboard__key}>
            k
          </button>
          <button type="button" className={styles.keyboard__key}>
            l
          </button>
          <button
            type="button"
            className={`${styles.keyboard__key} ${styles.keyboard__key__wide}`}
          >
            <TransitEnterexitIcon />
          </button>

          <br />
          <button
            type="button"
            className={`${styles.keyboard__key} ${styles.keyboard__key__wide} ${styles.keyboard__key__dark}`}
          >
            <CheckCircleIcon />
          </button>

          <button type="button" className={styles.keyboard__key}>
            z
          </button>
          <button type="button" className={styles.keyboard__key}>
            x
          </button>
          <button type="button" className={styles.keyboard__key}>
            c
          </button>
          <button type="button" className={styles.keyboard__key}>
            v
          </button>
          <button type="button" className={styles.keyboard__key}>
            b
          </button>
          <button type="button" className={styles.keyboard__key}>
            n
          </button>
          <button type="button" className={styles.keyboard__key}>
            m
          </button>
          <button type="button" className={styles.keyboard__key}>
            ,
          </button>
          <button type="button" className={styles.keyboard__key}>
            .
          </button>
          <button type="button" className={styles.keyboard__key}>
            ?
          </button>

          <br/>
          <button
            type="button"
            className={`${styles.keyboard__key} ${styles.keyboard__key__extra__wide}`}
          >
            <SpaceBarIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Keyboard;

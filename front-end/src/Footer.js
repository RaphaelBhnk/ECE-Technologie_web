
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  footer: {
    padding: '8px',
    height: '20px',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
}

export default () => {
  return (
    <footer style={styles.footer}>
      <center>
        Authors : Raphael BOUHNIK & Adrien ZYCHOWKSI
      </center>
    </footer>
  );
}

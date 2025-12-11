import {css} from "lit";

const styles = css`
    .items-list dl {
        display: grid;
        gap: 1rem;
    }
    
    .row {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        padding-left: 30px;
        padding-right: 30px;

        & > dt {
            grid-column: 1;
        }
        
        & > * {
            border: 3px solid black;
            padding: 0.75rem;
            font-color: var(--color-text);
        }
    }
`

export default {styles}
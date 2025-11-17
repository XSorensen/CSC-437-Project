import {css} from "@calpoly/mustang";

const styles = css`
    header {
        position: sticky;
        top: 0;
        background-color: var(--color-header-background);
        stroke: var(--color-header-stroke);
        stroke-dashoffset: 5%;

        flex:auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 10px 20px;

        & > * {
            width: fit-content
        }

        & > a {
            font-family:var(--default-font-family-header);
            font-size:var(--default-font-size-header);
            color:var(--color-header-text);
    
            text-decoration: none;
            color:var(--color-header-text);
        }
    }
`;

export default {styles}
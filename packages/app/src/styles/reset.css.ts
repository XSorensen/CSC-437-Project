import { css } from "lit";

const styles = css`
    * {
    margin: 0;
    box-sizing: border-box;
    font-family: var(--default-font-family-text);
    font-size: var(--default-font-size-text);
    }

    body {
    line-height: 1.5;
    height: max-content;
    }

    img {
    max-width: 100%;
    }

    a[onclick] {
        cursor: pointer;
    }
`;

export default { styles };
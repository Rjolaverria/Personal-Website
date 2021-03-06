import styled, { css } from 'styled-components';

const style = css`
    display: inline-block;
    text-decoration: none;
    vertical-align: middle;
    text-align: center;
    user-select: none;
    width: fit-content;
    padding: 0.5rem 0.875rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin: 4px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
    transition: 1s all;
    color: ${({ primary, secondary }) =>
        primary || secondary ? '#fff' : 'var(--primary-color)'};
    background-color: ${({ primary, secondary }) =>
        primary ? '#0066B8' : secondary ? 'var(--secondary-color)' : '#fff'};
    ${({ border, primary, secondary }) =>
        border && primary
            ? 'border: 3px solid var(--secondary-color)'
            : border
            ? 'border: 3px solid var(--primary-color)'
            : 'border: none'};

    &:hover {
        ${({ primary, secondary }) =>
            primary || secondary ? 'opacity: 0.8' : 'filter: brightness(90%)'};
    }
`;

export const Container = styled.button`
    ${style}
`;

export const Anchor = styled.a`
    ${style}
`;

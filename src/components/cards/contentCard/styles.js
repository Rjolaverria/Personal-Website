import styled from 'styled-components';
import { Button } from '../../';

export const Container = styled.div`
    max-width: 500px;
    background-color: ${({ primary, secondary, light }) =>
        primary
            ? 'var(--primary-color)'
            : secondary
            ? 'var(--secondary-color)'
            : light
            ? 'var(--light-color)'
            : '#fff'};
    color: ${({ primary, secondary }) =>
        primary || secondary ? '#fff' : 'var(--secondary-color)'};
    display: grid;
    grid-gap: 1em;
    grid-template: 200px auto auto 50px 0 / 0 auto auto 0;
    grid-template-areas:
        'img img img img'
        '... ttl ttl ...'
        '... bdy bdy ...'
        '... inf btn ...'
        '... ... ... ...';
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

    a {
        text-decoration: none;
        color: var(--primary-color);
    }
`;

export const Image = styled.img`
    object-fit: cover;
    grid-area: img;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    grid-area: ttl;

`;

export const Body = styled.p`
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.2;
    grid-area: bdy;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Info = styled.div`
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.8;
    grid-area: inf;
    align-self: end;
    justify-self: start;
`;

export const CardButton = styled(Button)`
    margin: 0;
    grid-area: btn;
    justify-self: end;
    align-self: end;
`;

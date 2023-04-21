import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%:
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const Row = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ImageDio = styled.img`
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BuscarInputContainer = styled.div`
    width: 250px;
    height: 30px;
    background: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    justify-content: center;
    align-itemns: center;
`;

export const Menu = styled.a`
    font-family: "Open Sans";
    font-style: normal;
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;

export const MenuRight = styled.a`
    font-family: "Open Sans";
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;

    & p {
        font-size: 10px;
        margin-top: -10px;
    }
`;
export const UserPicture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 22px;
    border: 2px solid #ffffff;
`;

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #ffffff;
`;

export const ButtonHeader = styled.button`
    background: #222;
    border-radius: 22px;
    position: relative;

    color: #ffff;
    padding: 2px 12px;
    min-width: 10px;
    height: 25px;   
    width: 100%;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
        background: white;
        color: #222;
    }
`
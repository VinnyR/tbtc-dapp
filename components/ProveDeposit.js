import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '../components/Button'
import { PageTemplate } from '../components/PageTemplate'
import { MainBlock } from "../components/MainBlock"

const CopyAddressBox = styled.div`
    background: #ddd;
    border: 1px solid #ddd;
    display: inline-block;
    padding: 1em;
`

const ProveDeposit = ({ submitProof }) => {
    return <PageTemplate>
        <MainBlock>
            <h2>Confirmed!</h2>
            <p>Finally, let's submit proof to Ethereum and get your tBTC</p>

            <Button onClick={submitProof}>Submit Proof</Button>
        </MainBlock>
    </PageTemplate>
}

export { ProveDeposit }
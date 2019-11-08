// Deposit
export const REQUEST_A_DEPOSIT = 'REQUEST_A_DEPOSIT'
export const WAIT_CONFIRMATION = 'WAIT_CONFIRMATION'
export const SUBMIT_DEPOSIT_PROOF = 'SUBMIT_DEPOSIT_PROOF'

export function requestADeposit() {
    return {
        type: REQUEST_A_DEPOSIT
    }
}

export function waitConfirmation() {
    return {
        type: WAIT_CONFIRMATION
    }
}

export function submitProof() {
    return {
        type: SUBMIT_DEPOSIT_PROOF
    }
}

// Redemption
export const SAVE_ADDRESSES = 'SAVE_ADDRESSES'
export const BUILD_TRANSACTION_AND_SUBMIT_SIGNATURE = 'BUILD_TRANSACTION_AND_SUBMIT_SIGNATURE'
export const BROADCAST_TRANSACTION = 'BROADCAST_TRANSACTION'
export const POLL_FOR_CONFIRMATION = 'POLL_FOR_CONFIRMATION'

export function saveAddresses({ btcAddress, contractAddress }) {
    return {
        type: SAVE_ADDRESSES,
        payload: {
            btcAddress,
            contractAddress
        }
    }
}

export function buildTransactionAndSubmitSignature() {
    return {
        type: BUILD_TRANSACTION_AND_SUBMIT_SIGNATURE
    }
}

export function broadcastTransaction() {
    return {
        type: BROADCAST_TRANSACTION
    }
}

export function pollForConfirmations() {
    return {
        type: POLL_FOR_CONFIRMATION
    }
}

// Modal
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SET_RENDER_CONTENT = 'SET_RENDER_CONTENT'

export function openModal() {
    return {
        type: OPEN_MODAL
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function setRenderContent(renderContent) {
    return {
        type: SET_RENDER_CONTENT,
        payload: {
            renderContent
        }
    }
}
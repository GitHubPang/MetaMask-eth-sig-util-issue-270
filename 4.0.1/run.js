const {signTypedData, SignTypedDataVersion} = require("@metamask/eth-sig-util");

const typedData = {
    types: {
        EIP712Domain: [],
        EmailMessage: [{name: "attachmentData", type: "bytes"}]
    },
    domain: {},
    primaryType: "EmailMessage",
    message: {attachmentData: "0xa22cb465000000000000000000000000a9079d872d10185b54c5db2c36cc978cbd3f72b70000000000000000000000000000000000000000000000000000000000000001"}
};
const signature = signTypedData({
    data: typedData,
    privateKey: Buffer.from("32439235b4686f35da2726ad2c8f00122c18274d6eed2c57c3b66c847f5b6ab5", "hex"),
    version: SignTypedDataVersion.V4
});

console.log(`signature is ${signature}`);
if (signature === "0x25172b7da83550708a406f11a8ebb50c22b0b53b86ff074b447166785d66e57a422c3184e03346bdda3c5a7f9861c96b642acdce831109d4b2a19c71b16bdc1b1b") {
    console.log("OK ✔");
} else {
    console.error("Wrong! 😲")
}

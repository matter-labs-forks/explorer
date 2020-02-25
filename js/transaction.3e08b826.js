(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["transaction"],{"1f12":function(t,e,a){"use strict";var s=a("dd06"),i=a.n(s);i.a},3152:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.nightMode?s("img",{staticClass:"mx-auto",attrs:{src:a("6772")}}):s("img",{staticClass:"mx-auto",attrs:{src:a("62eb")}}),s("h1",{staticClass:"text-3xl"},[t._v(" "+t._s(t.$t("PAGES.NOT_FOUND.TITLE"))+" ")]),s("i18n",{staticClass:"mt-2",attrs:{tag:"p",path:"PAGES.NOT_FOUND.DATA"}},[s("span",{attrs:{place:"dataType"}},[t._v(t._s(t.dataType))]),s("span",{staticClass:"semibold",attrs:{place:"dataId"}},[t._v(" "+t._s(t.dataId)+" ")])]),s("button",{staticClass:"button-lg mt-4",attrs:{disabled:t.isLoading},on:{click:t.emitReload}},[t.isLoading?s("Loader",{attrs:{data:null}}):s("span",[t._v(t._s(t.$t("COMMON.RELOAD")))])],1)],1)},i=[],n=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),r=a("d4ec"),c=a("bee2"),o=a("99de"),l=a("7e84"),u=a("262e"),d=a("9ab4"),p=a("60a3"),v=a("2f62");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"emitReload",value:function(){this.$emit("reload")}}]),e}(p["e"]);Object(d["a"])([Object(p["c"])({required:!0})],h.prototype,"isLoading",void 0),Object(d["a"])([Object(p["c"])({required:!0})],h.prototype,"dataType",void 0),Object(d["a"])([Object(p["c"])({required:!0})],h.prototype,"dataId",void 0),h=Object(d["a"])([Object(p["a"])({computed:m({},Object(v["b"])("ui",["nightMode"]))})],h);var y=h,C=y,g=a("2877"),f=Object(g["a"])(C,s,i,!1,null,null,null);e["a"]=f.exports},"62eb":function(t,e,a){t.exports=a.p+"img/light.26b3181b.png"},6772:function(t,e,a){t.exports=a.p+"img/dark.ba39742c.png"},"6b31":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.transaction?a("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[a("ContentHeader",[t._v(t._s(t.$t("COMMON.TRANSACTION")))]),t.transactionNotFound?[a("section",{staticClass:"page-section py-5 md:py-10 px-6"},[a("div",{staticClass:"my-10 text-center"},[a("NotFound",{attrs:{"is-loading":t.isLoading,"data-id":t.transaction.id,"data-type":"transaction"},on:{reload:t.onReload}})],1)])]:[a("section",{staticClass:"mb-5"},[a("div",{staticClass:"px-5 sm:px-10 py-8 bg-theme-feature-background flex xl:rounded-lg items-center justify-between"},[a("div",{staticClass:"relative mr-6 flex-none"},[a("SvgIcon",{staticClass:"block",attrs:{name:"transaction","view-box":"0 0 43 39"}}),a("div",{staticClass:"absolute text-theme-transaction-icon text-2xl",staticStyle:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},[t._v(" "+t._s(t.networkSymbol)+" ")])],1),a("div",{staticClass:"flex-auto min-w-0"},[a("div",{staticClass:"text-grey mb-2"},[t._v(" "+t._s(t.$t("TRANSACTION.ID"))+" ")]),a("div",{staticClass:"flex"},[a("div",{staticClass:"text-xl text-white semibold truncate"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.transaction.id))])]),t.transaction.id?a("Clipboard",{attrs:{value:t.transaction.id}}):t._e()],1)])])]),a("TransactionDetails",{ref:"transactionDetails",attrs:{transaction:t.transaction}}),t.isMultiPayment(t.transaction.type,t.transaction.typeGroup)?a("section",{staticClass:"page-section py-5 md:py-10"},[a("MultiPaymentTransactions",{attrs:{transaction:t.transaction,page:t.currentPage}}),t.showPagination?a("Pagination",{attrs:{meta:t.meta,"current-page":t.currentPage},on:{"page-change":t.onPageChange}}):t._e()],1):t._e()]],2):t._e()},i=[],n=(a("a4d3"),a("4de4"),a("7db0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("25f0"),a("159b"),a("ade3")),r=a("a34a"),c=a.n(r),o=(a("96cf"),a("d4ec")),l=a("bee2"),u=a("99de"),d=a("7e84"),p=a("262e"),v=a("9ab4"),b=a("60a3"),m=a("2f62"),h=a("3152"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"page-section py-5 md:py-10 mb-5"},[a("div",{staticClass:"px-5 sm:px-10"},[a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.SENDER")))]),a("div",{staticClass:"truncate"},[a("LinkWallet",{attrs:{address:t.transaction.sender,trunc:!1,"tooltip-placement":"left"}})],1)]),a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.RECIPIENT")))]),a("div",{staticClass:"truncate"},[a("LinkWallet",{attrs:{address:t.transaction.recipient,trunc:!1,"tooltip-placement":"left"}})],1)]),a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.TYPE")))]),a("div",{staticClass:"truncate"},[a("LinkWallet",{attrs:{address:t.transaction.recipient,type:t.transaction.type,asset:t.transaction.asset,trunc:!1,"type-group":t.transaction.typeGroup,"show-as-type":!0,"tooltip-placement":"left"}})],1)]),a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("COMMON.CONFIRMATIONS")))]),a("div",[t._v(t._s(t.readableNumber(t.confirmations)))])]),a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.AMOUNT")))]),t.isMultiPayment(t.transaction.type,t.transaction.typeGroup)?a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.price?t.readableCurrency(t.multipaymentAmount,t.price):"",placement:"left"},expression:"{\n            trigger: 'hover click',\n            content: price ? readableCurrency(multipaymentAmount, price) : '',\n            placement: 'left',\n          }"}]},[t._v(" "+t._s(t.readableCrypto(t.multipaymentAmount))+" ")]):a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.price?t.readableCurrency(t.transaction.amount,t.price):"",placement:"left"},expression:"{\n            trigger: 'hover click',\n            content: price ? readableCurrency(transaction.amount, price) : '',\n            placement: 'left',\n          }"}]},[t._v(" "+t._s(t.readableCrypto(t.transaction.amount))+" ")])]),a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.FEE")))]),a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.price?t.readableCurrency(t.transaction.fee,t.price):"",placement:"left"},expression:"{\n            trigger: 'hover click',\n            content: price ? readableCurrency(transaction.fee, price) : '',\n            placement: 'left',\n          }"}]},[t._v(" "+t._s(t.readableCrypto(t.transaction.fee))+" ")])]),a("div",{staticClass:"list-row-border-b-no-wrap"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("COMMON.TIMESTAMP")))]),t.transaction.timestamp?a("div",[t._v(t._s(t.readableTimestamp(t.transaction.timestamp.unix)))]):t._e()]),t.transaction.vendorField?a("div",{staticClass:"list-row-border-b-no-wrap"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.SMARTBRIDGE")))]),a("div",{staticClass:"overflow-hidden break-words"},[t._v(t._s(t.emojify(t.transaction.vendorField)))])]):t._e(),t.transaction.nonce?a("div",{staticClass:"list-row-border-b-no-wrap"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.NONCE")))]),a("div",[t._v(t._s(t.transaction.nonce))])]):t._e(),t.isIpfs(t.transaction.type,t.transaction.typeGroup)?a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.IPFS")))]),a("div",{staticClass:"overflow-hidden break-all"},[t._v(t._s(t.transaction.asset.ipfs))])]):t._e(),t.isTimelock(t.transaction.type,t.transaction.typeGroup)?a("div",[a("div",{staticClass:"list-row-border-b-no-wrap"},[a("div",{staticClass:"mr-4 whitespace-no-wrap"},[t._v(t._s(t.$t("TRANSACTION.TIMELOCK.SECRET_HASH")))]),a("div",{staticClass:"overflow-hidden break-all"},[t._v(t._s(t.transaction.asset.lock.secretHash))])]),1===t.transaction.asset.lock.expiration.type?a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.TIMELOCK.EXPIRATION")))]),a("div",[t._v(t._s(t.readableTimestampFromEpoch(t.transaction.asset.lock.expiration.value)))])]):2===t.transaction.asset.lock.expiration.type?a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.TIMELOCK.BLOCKHEIGHT")))]),a("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{trigger:"hover click",content:t.readableTimestampFromBlockheight(t.transaction.asset.lock.expiration.value),placement:"left"},expression:"{\n              trigger: 'hover click',\n              content: readableTimestampFromBlockheight(transaction.asset.lock.expiration.value),\n              placement: 'left',\n            }"}]},[t._v(" "+t._s(t.transaction.asset.lock.expiration.value)+" ")])]):t._e(),a("div",{staticClass:"list-row-border-b-no-wrap"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.TIMELOCK.STATUS")))]),t.timelockLink?a("div",[a("LinkTransaction",{attrs:{id:t.timelockLink}},[t._v(t._s(t.timelockStatus))])],1):a("div",[t._v(t._s(t.timelockStatus))])])]):t._e(),t.isTimelockClaim(t.transaction.type,t.transaction.typeGroup)?a("div",[a("div",{staticClass:"list-row-border-b-no-wrap"},[a("div",{staticClass:"mr-4 whitespace-no-wrap"},[t._v(t._s(t.$t("TRANSACTION.TIMELOCK.UNLOCK_SECRET_HEX")))]),a("div",{staticClass:"overflow-hidden break-all"},[t._v(t._s(t.stringToHex(t.transaction.asset.claim.unlockSecret)))])]),a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.TIMELOCK.CLAIMED")))]),a("div",{staticClass:"overflow-hidden break-all"},[a("LinkTransaction",{attrs:{id:t.transaction.asset.claim.lockTransactionId}})],1)])]):t._e(),t.isTimelockRefund(t.transaction.type,t.transaction.typeGroup)?a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.TIMELOCK.REFUNDED")))]),a("div",{staticClass:"overflow-hidden break-all"},[a("LinkTransaction",{attrs:{id:t.transaction.asset.refund.lockTransactionId}})],1)]):t._e(),a("div",{staticClass:"list-row"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.BLOCK_ID")))]),a("div",[t.transaction.blockId?a("LinkBlock",{attrs:{id:t.transaction.blockId}},[t._v(t._s(t.transaction.blockId))]):t._e()],1)])])]),t.isMultiSignature(t.transaction.type,t.transaction.typeGroup)?a("section",{staticClass:"TransactionDetails__MultiSignature page-section py-5 md:py-10 mb-5"},[a("div",{staticClass:"px-5 sm:px-10"},[t.isLegacyMultiSignature?t._e():a("div",{staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.MULTI_SIGNATURE.ADDRESS")))]),a("div",{staticClass:"truncate"},[a("LinkWallet",{attrs:{address:t.addressFromMultiSignatureAsset(t.multiSignatureAsset),trunc:!1,"tooltip-placement":"left"}})],1)]),a("div",{staticClass:"list-row-border-b-no-wrap"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.MULTI_SIGNATURE.PARTICIPANTS")))]),a("ul",t._l(t.publicKeysFromMultiSignatureAsset,(function(e){return a("li",{key:e,staticClass:"mb-1"},[a("LinkWallet",{staticClass:"justify-end",attrs:{address:t.addressFromPublicKey(e),trunc:!1,"tooltip-placement":"left"}})],1)})),0)]),a("div",{class:t.isLegacyMultiSignature?"list-row-border-b":"list-row"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.MULTI_SIGNATURE.MIN")))]),a("div",[t._v(t._s(t.multiSignatureAsset.min)+" / "+t._s(t.publicKeysFromMultiSignatureAsset.length))])]),t.isLegacyMultiSignature?[a("div",{staticClass:"list-row"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.MULTI_SIGNATURE.LIFETIME")))]),a("div",[t._v(" "+t._s(t.multiSignatureAsset.lifetime)+" ")])]),t.isLegacyMultiSignature?a("div",{staticClass:"list-row text-sm text-theme-text-secondary"},[a("span",[t._v("* "+t._s(t.$t("TRANSACTION.MULTI_SIGNATURE.LEGACY_NOTICE")))])]):t._e()]:t._e()],2)]):t._e(),t.transaction.typeGroup===t.typeGroupTransaction.MAGISTRATE&&t.transaction.type!==t.magistrateTransaction.BUSINESS_RESIGNATION?a("section",{staticClass:"page-section py-5 md:py-10 mb-5"},[a("div",{staticClass:"px-5 sm:px-10"},t._l(t.assetField,(function(e,s){return a("div",{key:s,staticClass:"list-row-border-b"},[a("div",{staticClass:"mr-4"},[t._v(t._s(t.$t("TRANSACTION.ASSET."+s.toUpperCase())))]),a("div",{staticClass:"overflow-hidden break-all"},[t._v(t._s(e))])])})),0)]):t._e()])},C=[],g=(a("d81d"),a("fb6a"),a("8678")),f=a("08ba");function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.initialBlockHeight=0,t.price=0,t.multipaymentAmount=null,t.timelockStatus=null,t.timelockLink=null,t}return Object(p["a"])(e,t),Object(l["a"])(e,[{key:"onTransactionChanged",value:function(){return c.a.async((function(t){while(1)switch(t.prev=t.next){case 0:this.updatePrice(),this.handleMultipayment(),this.getTimelockStatus(),this.setInitialBlockHeight();case 4:case"end":return t.stop()}}),null,this)}},{key:"onCurrencySymbolChanged",value:function(){return c.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(this.updatePrice());case 2:case"end":return t.stop()}}),null,this)}},{key:"onHeightChanged",value:function(t,e){e||this.setInitialBlockHeight()}},{key:"mounted",value:function(){return c.a.async((function(t){while(1)switch(t.prev=t.next){case 0:this.updatePrice(),this.handleMultipayment(),this.getTimelockStatus();case 3:case"end":return t.stop()}}),null,this)}},{key:"updatePrice",value:function(){return c.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(f["e"].dailyAverage(this.transaction.timestamp.unix));case 2:this.price=t.sent;case 3:case"end":return t.stop()}}),null,this)}},{key:"setInitialBlockHeight",value:function(){this.initialBlockHeight=this.height-this.transaction.confirmations}},{key:"handleMultipayment",value:function(){this.isMultiPayment(this.transaction.type,this.transaction.typeGroup)&&(this.multipaymentAmount=this.calculateMultipaymentAmount(this.transaction))}},{key:"getTimelockStatus",value:function(){var t,e;return c.a.async((function(a){while(1)switch(a.prev=a.next){case 0:if(!this.isTimelock(this.transaction.type,this.transaction.typeGroup)){a.next=14;break}return a.next=3,c.a.awrap(f["l"].findUnlockedForLocks([this.transaction.id]));case 3:if(t=a.sent,0!==t.data.length){a.next=11;break}return a.next=7,c.a.awrap(f["h"].find(this.transaction.id));case 7:e=a.sent,this.timelockStatus=e.isExpired?this.$t("TRANSACTION.TIMELOCK.EXPIRED"):this.$t("TRANSACTION.TIMELOCK.OPEN"),a.next=12;break;case 11:t.data[0].type===g["a"].TIMELOCK_CLAIM?(this.timelockStatus=this.$t("TRANSACTION.TIMELOCK.CLAIMED"),this.timelockLink=t.data[0].id):t.data[0].type===g["a"].TIMELOCK_REFUND&&(this.timelockStatus=this.$t("TRANSACTION.TIMELOCK.REFUNDED"),this.timelockLink=t.data[0].id);case 12:a.next=15;break;case 14:this.timelockStatus=this.$t("TRANSACTION.TIMELOCK.UNKNOWN");case 15:case"end":return a.stop()}}),null,this)}},{key:"confirmations",get:function(){return this.initialBlockHeight?this.height-this.initialBlockHeight:this.transaction.confirmations}},{key:"coreTransaction",get:function(){return g["a"]}},{key:"magistrateTransaction",get:function(){return g["c"]}},{key:"typeGroupTransaction",get:function(){return g["d"]}},{key:"isLegacyMultiSignature",get:function(){return!!this.transaction.asset.multiSignatureLegacy}},{key:"multiSignatureAsset",get:function(){return this.transaction.asset.multiSignature||this.transaction.asset.multiSignatureLegacy}},{key:"publicKeysFromMultiSignatureAsset",get:function(){return this.isLegacyMultiSignature?this.multiSignatureAsset.keysgroup.map((function(t){return t.slice(1)})):this.multiSignatureAsset.publicKeys}},{key:"assetField",get:function(){switch(this.transaction.type){case g["c"].BUSINESS_REGISTRATION:return this.transaction.asset.businessRegistration;case g["c"].BUSINESS_UPDATE:return this.transaction.asset.businessUpdate;case g["c"].BRIDGECHAIN_REGISTRATION:return this.transaction.asset.bridgechainRegistration;case g["c"].BRIDGECHAIN_RESIGNATION:return this.transaction.asset.bridgechainResignation;case g["c"].BRIDGECHAIN_UPDATE:return this.transaction.asset.bridgechainUpdate;default:return[]}}}]),e}(b["e"]);Object(v["a"])([Object(b["c"])({required:!0})],_.prototype,"transaction",void 0),Object(v["a"])([Object(b["f"])("transaction")],_.prototype,"onTransactionChanged",null),Object(v["a"])([Object(b["f"])("currencySymbol")],_.prototype,"onCurrencySymbolChanged",null),Object(v["a"])([Object(b["f"])("height")],_.prototype,"onHeightChanged",null),_=Object(v["a"])([Object(b["a"])({computed:T({},Object(m["b"])("currency",{currencySymbol:"symbol"}),{},Object(m["b"])("network",["height"]))})],_);var k=_,S=k,N=(a("1f12"),a("2877")),A=Object(N["a"])(S,y,C,!1,null,"7579e5e4",null),w=A.exports,I=a("9cbd"),j=a("85ee");function E(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?E(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}b["a"].registerHooks(["beforeRouteEnter","beforeRouteUpdate"]);var R=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.transaction=null,t.transactionNotFound=!1,t.isLoading=!1,t.meta=null,t.currentPage=1,t}return Object(p["a"])(e,t),Object(l["a"])(e,[{key:"beforeRouteEnter",value:function(t,e,a){var s;return c.a.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.awrap(I["a"].find(t.params.id));case 3:s=e.sent,a((function(t){t.setTransaction(s),t.calculateMeta()})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),a((function(a){console.log(e.t0.message||e.t0.data.error),a.transactionNotFound=!0,a.transaction={id:t.params.id}}));case 10:case"end":return e.stop()}}),null,null,[[0,7]])}},{key:"beforeRouteUpdate",value:function(t,e,a){var s;return c.a.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.transaction=null,e.prev=1,e.next=4,c.a.awrap(I["a"].find(t.params.id));case 4:s=e.sent,this.setTransaction(s),this.calculateMeta(),a(),e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0.message||e.t0.data.error),this.transactionNotFound=!0,this.transaction={id:t.params.id};case 15:case"end":return e.stop()}}),null,this,[[1,10]])}},{key:"fetchTransaction",value:function(){var t,e=this;return c.a.async((function(a){while(1)switch(a.prev=a.next){case 0:return this.isLoading=!0,a.prev=1,a.next=4,c.a.awrap(I["a"].find(this.transaction.id));case 4:t=a.sent,this.setTransaction(t),this.transactionNotFound=!1,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),console.log(a.t0.message||a.t0.data.error);case 12:return a.prev=12,setTimeout((function(){return e.isLoading=!1}),750),a.finish(12);case 15:case"end":return a.stop()}}),null,this,[[1,9,12,15]])}},{key:"setTransaction",value:function(t){this.transaction=t}},{key:"setMeta",value:function(t){this.meta=t}},{key:"onPageChange",value:function(t){this.currentPage!==t&&(this.currentPage=t,this.meta.count=t,this.meta.self=t.toString(),this.meta.next=t<this.meta.pageCount?(t+1).toString():null,this.meta.previous=t>1?(t-1).toString():null,this.$refs.transactionDetails.$el.scrollIntoView(!1))}},{key:"calculateMeta",value:function(){if(this.transaction&&this.isMultiPayment(this.transaction.type,this.transaction.typeGroup)){var t=this.transaction.asset.payments.length,e=Math.ceil(t/j["b"]);this.meta={count:t>=j["b"]?j["b"]:t,pageCount:e,totalCount:t,next:e>1?"2":null,previous:null,self:"1",first:"1",last:e.toString()}}}},{key:"onReload",value:function(){this.fetchTransaction()}},{key:"showPagination",get:function(){return this.meta&&this.meta.pageCount>1}}]),e}(b["e"]);R=Object(v["a"])([Object(b["a"])({components:{NotFound:h["a"],TransactionDetails:w},computed:x({},Object(m["b"])("network",["height"]),{},Object(m["b"])("network",{networkSymbol:"symbol"}))})],R);var M=R,L=M,P=Object(N["a"])(L,s,i,!1,null,null,null);e["default"]=P.exports},dd06:function(t,e,a){}}]);
//# sourceMappingURL=transaction.3e08b826.js.map
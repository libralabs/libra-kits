/** 手机号正则 */
export const phone =
  /^(0|86|17951)?1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

/** 邮箱正则 */
export const email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

/** URL正则 */
export const url =
  /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

/** 身份证号 */
export const idCard =
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

/** IP地址 */
export const ip =
  /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d)$/;

/** 银行卡号 */
export const bankCard = /^([1-9]{1})(\d{14}|\d{18})$/;

/** 统一社会信用代码
 * USCC: Unified social credit code
 */
export const uscc =
  /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/;

/** 邮政编码 */
export const postcode = /^[1-9]\d{5}(?!\d)$/;

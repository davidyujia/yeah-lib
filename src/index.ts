export namespace yeahLib {
    export class NumBinary {
        private val: string = '';
        /**
         * Init
         * @param val 數值
         */
        constructor(val: any) {
            val = Number(val);
            this.val = val.toString(2) + '';
        }

        /**
         * 比較數值是否存在
         * @param val 
         */
        public exist(val: NumBinary): boolean {
            const l1 = this.toString().length;
            const l2 = val.toString().length;
            const len = l1 > l2 ? l1 : l2;
            const val1 = this.toString(len);
            const val2 = val.toString(len);

            for (let i = 0; i < len; i++) {
                if (val2[i] !== '1') {
                    continue;
                }

                if (val1[i] === '1') {
                    continue;
                }

                return false;
            }

            return true;

        }

        public toString(length: number = 0) {

            const diff = length - this.val.length;

            return diff > 0 ? Array(diff + 1).join('0') + this.val : this.val;
        }
    }

    /**
     * 數字轉二進位字串
     * @export
     * @param {*} val 數字
     * @param {number} [length=0] 補 0
     * @returns
     */
    export function paddingBinary(val: any, length: number = 0): string {
        val = Number(val);
        const temp = val.toString(2) + '';
        const len = temp.length;
        const diff = length - len;
        return diff > 0 ? Array(diff + 1).join('0') + temp : temp;
    }
}
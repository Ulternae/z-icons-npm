import React from 'react';

export interface NeoMoneyBillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMoneyBillSolid: React.FC<NeoMoneyBillSolidProps>;
export default NeoMoneyBillSolid;

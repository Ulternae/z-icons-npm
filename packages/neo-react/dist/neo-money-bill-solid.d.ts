import React from 'react';

export interface NeoMoneyBillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMoneyBillSolid(props: NeoMoneyBillSolidProps): React.ReactElement;
export default NeoMoneyBillSolid;

import React from 'react';

export interface LanMoneyBillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillSolid(props: LanMoneyBillSolidProps): React.ReactElement;
export default LanMoneyBillSolid;

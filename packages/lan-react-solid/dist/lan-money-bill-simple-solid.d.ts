import React from 'react';

export interface LanMoneyBillSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillSimpleSolid(props: LanMoneyBillSimpleSolidProps): React.ReactElement;
export default LanMoneyBillSimpleSolid;

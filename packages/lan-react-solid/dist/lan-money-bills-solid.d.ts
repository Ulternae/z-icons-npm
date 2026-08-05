import React from 'react';

export interface LanMoneyBillsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillsSolid(props: LanMoneyBillsSolidProps): React.ReactElement;
export default LanMoneyBillsSolid;

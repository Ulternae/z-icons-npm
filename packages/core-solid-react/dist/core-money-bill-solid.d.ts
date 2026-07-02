import React from 'react';

export interface CoreMoneyBillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoneyBillSolid(props: CoreMoneyBillSolidProps): React.ReactElement;
export default CoreMoneyBillSolid;

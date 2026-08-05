import React from 'react';

export interface CoreMoneyBillWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoneyBillWaveSolid(props: CoreMoneyBillWaveSolidProps): React.ReactElement;
export default CoreMoneyBillWaveSolid;

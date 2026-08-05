import React from 'react';

export interface LanGasPumpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGasPumpRegular(props: LanGasPumpRegularProps): React.ReactElement;
export default LanGasPumpRegular;

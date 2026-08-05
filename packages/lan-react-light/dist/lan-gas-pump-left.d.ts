import React from 'react';

export interface LanGasPumpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGasPumpLeft(props: LanGasPumpLeftProps): React.ReactElement;
export default LanGasPumpLeft;

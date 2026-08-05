import React from 'react';

export interface LanGasPumpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGasPump(props: LanGasPumpProps): React.ReactElement;
export default LanGasPump;

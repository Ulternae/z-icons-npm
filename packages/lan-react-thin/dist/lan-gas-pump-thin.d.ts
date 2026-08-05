import React from 'react';

export interface LanGasPumpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGasPumpThin(props: LanGasPumpThinProps): React.ReactElement;
export default LanGasPumpThin;

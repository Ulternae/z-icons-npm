import React from 'react';

export interface LanScorpioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScorpioSolid(props: LanScorpioSolidProps): React.ReactElement;
export default LanScorpioSolid;

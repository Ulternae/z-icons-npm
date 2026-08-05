import React from 'react';

export interface LanCircleSmallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSmallSolid(props: LanCircleSmallSolidProps): React.ReactElement;
export default LanCircleSmallSolid;

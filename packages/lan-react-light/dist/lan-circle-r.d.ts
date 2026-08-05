import React from 'react';

export interface LanCircleRProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleR(props: LanCircleRProps): React.ReactElement;
export default LanCircleR;

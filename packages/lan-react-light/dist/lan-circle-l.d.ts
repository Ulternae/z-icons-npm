import React from 'react';

export interface LanCircleLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleL(props: LanCircleLProps): React.ReactElement;
export default LanCircleL;

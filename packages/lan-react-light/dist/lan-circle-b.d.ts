import React from 'react';

export interface LanCircleBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleB(props: LanCircleBProps): React.ReactElement;
export default LanCircleB;

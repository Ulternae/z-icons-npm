import React from 'react';

export interface LanCirclePProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleP(props: LanCirclePProps): React.ReactElement;
export default LanCircleP;

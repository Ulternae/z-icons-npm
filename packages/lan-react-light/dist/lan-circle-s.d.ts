import React from 'react';

export interface LanCircleSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleS(props: LanCircleSProps): React.ReactElement;
export default LanCircleS;

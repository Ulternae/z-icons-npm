import React from 'react';

export interface LanCircleFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleF(props: LanCircleFProps): React.ReactElement;
export default LanCircleF;

import React from 'react';

export interface LanCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle(props: LanCircleProps): React.ReactElement;
export default LanCircle;

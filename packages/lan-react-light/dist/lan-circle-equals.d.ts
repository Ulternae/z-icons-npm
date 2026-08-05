import React from 'react';

export interface LanCircleEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEquals(props: LanCircleEqualsProps): React.ReactElement;
export default LanCircleEquals;

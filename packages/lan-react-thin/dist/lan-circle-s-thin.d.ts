import React from 'react';

export interface LanCircleSThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSThin(props: LanCircleSThinProps): React.ReactElement;
export default LanCircleSThin;

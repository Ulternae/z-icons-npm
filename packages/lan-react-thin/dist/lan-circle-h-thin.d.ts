import React from 'react';

export interface LanCircleHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHThin(props: LanCircleHThinProps): React.ReactElement;
export default LanCircleHThin;

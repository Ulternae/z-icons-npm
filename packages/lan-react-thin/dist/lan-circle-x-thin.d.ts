import React from 'react';

export interface LanCircleXThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleXThin(props: LanCircleXThinProps): React.ReactElement;
export default LanCircleXThin;

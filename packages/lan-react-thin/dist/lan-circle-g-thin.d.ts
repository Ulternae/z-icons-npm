import React from 'react';

export interface LanCircleGThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGThin(props: LanCircleGThinProps): React.ReactElement;
export default LanCircleGThin;

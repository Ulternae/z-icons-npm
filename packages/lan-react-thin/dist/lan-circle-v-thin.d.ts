import React from 'react';

export interface LanCircleVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleVThin(props: LanCircleVThinProps): React.ReactElement;
export default LanCircleVThin;

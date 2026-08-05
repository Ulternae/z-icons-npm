import React from 'react';

export interface LanCirclePlayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlayThin(props: LanCirclePlayThinProps): React.ReactElement;
export default LanCirclePlayThin;

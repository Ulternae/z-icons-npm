import React from 'react';

export interface LanCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBoltThin(props: LanCircleBoltThinProps): React.ReactElement;
export default LanCircleBoltThin;

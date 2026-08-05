import React from 'react';

export interface LanCircleMillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMillThin(props: LanCircleMillThinProps): React.ReactElement;
export default LanCircleMillThin;

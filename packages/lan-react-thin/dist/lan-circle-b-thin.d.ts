import React from 'react';

export interface LanCircleBThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBThin(props: LanCircleBThinProps): React.ReactElement;
export default LanCircleBThin;

import React from 'react';

export interface LanMopedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMopedThin(props: LanMopedThinProps): React.ReactElement;
export default LanMopedThin;

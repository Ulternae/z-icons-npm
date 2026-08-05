import React from 'react';

export interface LanUserViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserViewfinderThin(props: LanUserViewfinderThinProps): React.ReactElement;
export default LanUserViewfinderThin;

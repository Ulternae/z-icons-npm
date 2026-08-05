import React from 'react';

export interface LanMountainsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainsThin(props: LanMountainsThinProps): React.ReactElement;
export default LanMountainsThin;

import React from 'react';

export interface LanChestDrawersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestDrawersThin(props: LanChestDrawersThinProps): React.ReactElement;
export default LanChestDrawersThin;

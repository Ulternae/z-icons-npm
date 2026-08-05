import React from 'react';

export interface LanChestnutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestnutThin(props: LanChestnutThinProps): React.ReactElement;
export default LanChestnutThin;

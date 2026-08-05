import React from 'react';

export interface LanPanFryingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFryingThin(props: LanPanFryingThinProps): React.ReactElement;
export default LanPanFryingThin;

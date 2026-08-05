import React from 'react';

export interface LanPenFancyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFancyThin(props: LanPenFancyThinProps): React.ReactElement;
export default LanPenFancyThin;

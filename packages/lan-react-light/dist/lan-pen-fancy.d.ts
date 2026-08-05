import React from 'react';

export interface LanPenFancyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFancy(props: LanPenFancyProps): React.ReactElement;
export default LanPenFancy;

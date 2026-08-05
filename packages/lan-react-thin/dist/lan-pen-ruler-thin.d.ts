import React from 'react';

export interface LanPenRulerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenRulerThin(props: LanPenRulerThinProps): React.ReactElement;
export default LanPenRulerThin;

import React from 'react';

export interface LanTableLayoutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableLayoutThin: React.FC<LanTableLayoutThinProps>;
export default LanTableLayoutThin;

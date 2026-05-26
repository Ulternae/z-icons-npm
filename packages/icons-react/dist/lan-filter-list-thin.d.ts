import React from 'react';

export interface LanFilterListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterListThin: React.FC<LanFilterListThinProps>;
export default LanFilterListThin;

import React from 'react';

export interface LanAnglesUpDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnglesUpDownThin: React.FC<LanAnglesUpDownThinProps>;
export default LanAnglesUpDownThin;

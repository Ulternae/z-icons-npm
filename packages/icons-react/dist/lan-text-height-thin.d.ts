import React from 'react';

export interface LanTextHeightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextHeightThin: React.FC<LanTextHeightThinProps>;
export default LanTextHeightThin;

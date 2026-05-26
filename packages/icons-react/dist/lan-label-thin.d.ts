import React from 'react';

export interface LanLabelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLabelThin: React.FC<LanLabelThinProps>;
export default LanLabelThin;

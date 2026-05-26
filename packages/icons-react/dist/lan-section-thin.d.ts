import React from 'react';

export interface LanSectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSectionThin: React.FC<LanSectionThinProps>;
export default LanSectionThin;

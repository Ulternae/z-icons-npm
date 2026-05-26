import React from 'react';

export interface LanIndustryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndustryThin: React.FC<LanIndustryThinProps>;
export default LanIndustryThin;

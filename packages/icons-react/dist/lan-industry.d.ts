import React from 'react';

export interface LanIndustryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndustry: React.FC<LanIndustryProps>;
export default LanIndustry;

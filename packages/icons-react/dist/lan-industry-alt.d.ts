import React from 'react';

export interface LanIndustryAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndustryAlt: React.FC<LanIndustryAltProps>;
export default LanIndustryAlt;

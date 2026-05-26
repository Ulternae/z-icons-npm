import React from 'react';

export interface LanIndustryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndustryRegular: React.FC<LanIndustryRegularProps>;
export default LanIndustryRegular;

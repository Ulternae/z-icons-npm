import React from 'react';

export interface LanIndustryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndustry(props: LanIndustryProps): React.ReactElement;
export default LanIndustry;

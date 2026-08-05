import React from 'react';

export interface LanIndustryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndustryThin(props: LanIndustryThinProps): React.ReactElement;
export default LanIndustryThin;

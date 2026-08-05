import React from 'react';

export interface LanIndustryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndustryRegular(props: LanIndustryRegularProps): React.ReactElement;
export default LanIndustryRegular;

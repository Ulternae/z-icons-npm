import React from 'react';

export interface LanCityRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCityRegular(props: LanCityRegularProps): React.ReactElement;
export default LanCityRegular;

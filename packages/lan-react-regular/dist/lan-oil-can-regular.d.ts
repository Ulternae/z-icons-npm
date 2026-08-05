import React from 'react';

export interface LanOilCanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilCanRegular(props: LanOilCanRegularProps): React.ReactElement;
export default LanOilCanRegular;

import React from 'react';

export interface LanUtilityCanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtilityCanRegular(props: LanUtilityCanRegularProps): React.ReactElement;
export default LanUtilityCanRegular;

import React from 'react';

export interface LanOctopusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctopusRegular(props: LanOctopusRegularProps): React.ReactElement;
export default LanOctopusRegular;

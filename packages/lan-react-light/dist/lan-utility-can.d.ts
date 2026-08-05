import React from 'react';

export interface LanUtilityCanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtilityCan(props: LanUtilityCanProps): React.ReactElement;
export default LanUtilityCan;

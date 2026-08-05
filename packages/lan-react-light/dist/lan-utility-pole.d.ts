import React from 'react';

export interface LanUtilityPoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtilityPole(props: LanUtilityPoleProps): React.ReactElement;
export default LanUtilityPole;

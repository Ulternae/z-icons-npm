import React from 'react';

export interface LanSuitcaseRollingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseRolling(props: LanSuitcaseRollingProps): React.ReactElement;
export default LanSuitcaseRolling;

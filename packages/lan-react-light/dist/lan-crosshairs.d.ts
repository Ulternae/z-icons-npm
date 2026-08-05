import React from 'react';

export interface LanCrosshairsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrosshairs(props: LanCrosshairsProps): React.ReactElement;
export default LanCrosshairs;

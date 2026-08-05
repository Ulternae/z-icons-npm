import React from 'react';

export interface LanLocationCrosshairsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocationCrosshairs(props: LanLocationCrosshairsProps): React.ReactElement;
export default LanLocationCrosshairs;

import React from 'react';

export interface LanSprinklerCeilingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprinklerCeiling(props: LanSprinklerCeilingProps): React.ReactElement;
export default LanSprinklerCeiling;

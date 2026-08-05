import React from 'react';

export interface LanHeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeat(props: LanHeatProps): React.ReactElement;
export default LanHeat;

import React from 'react';

export interface LanHeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeatThin(props: LanHeatThinProps): React.ReactElement;
export default LanHeatThin;

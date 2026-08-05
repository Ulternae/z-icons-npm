import React from 'react';

export interface LanPersonSwimmingWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimmingWater(props: LanPersonSwimmingWaterProps): React.ReactElement;
export default LanPersonSwimmingWater;

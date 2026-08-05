import React from 'react';

export interface LanWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWater(props: LanWaterProps): React.ReactElement;
export default LanWater;

import React from 'react';

export interface LanHandHoldingWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingWater(props: LanHandHoldingWaterProps): React.ReactElement;
export default LanHandHoldingWater;

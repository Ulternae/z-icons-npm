import React from 'react';

export interface LanLadderWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLadderWater(props: LanLadderWaterProps): React.ReactElement;
export default LanLadderWater;

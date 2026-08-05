import React from 'react';

export interface LanLadderWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLadderWaterThin(props: LanLadderWaterThinProps): React.ReactElement;
export default LanLadderWaterThin;

import React from 'react';

export interface LanLadderWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLadderWaterRegular(props: LanLadderWaterRegularProps): React.ReactElement;
export default LanLadderWaterRegular;

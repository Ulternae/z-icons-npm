import React from 'react';

export interface LanLadderWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLadderWaterSolid(props: LanLadderWaterSolidProps): React.ReactElement;
export default LanLadderWaterSolid;

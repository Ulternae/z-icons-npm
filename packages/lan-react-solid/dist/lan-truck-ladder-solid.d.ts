import React from 'react';

export interface LanTruckLadderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckLadderSolid(props: LanTruckLadderSolidProps): React.ReactElement;
export default LanTruckLadderSolid;

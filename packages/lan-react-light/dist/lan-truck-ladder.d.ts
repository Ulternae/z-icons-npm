import React from 'react';

export interface LanTruckLadderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckLadder(props: LanTruckLadderProps): React.ReactElement;
export default LanTruckLadder;

import React from 'react';

export interface LanTruckLadderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckLadderThin(props: LanTruckLadderThinProps): React.ReactElement;
export default LanTruckLadderThin;

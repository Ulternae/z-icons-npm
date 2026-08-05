import React from 'react';

export interface LanDiceThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceThreeSolid(props: LanDiceThreeSolidProps): React.ReactElement;
export default LanDiceThreeSolid;

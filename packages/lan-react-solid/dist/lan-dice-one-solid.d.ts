import React from 'react';

export interface LanDiceOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceOneSolid(props: LanDiceOneSolidProps): React.ReactElement;
export default LanDiceOneSolid;

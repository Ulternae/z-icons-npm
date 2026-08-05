import React from 'react';

export interface LanDiceD4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD4Solid(props: LanDiceD4SolidProps): React.ReactElement;
export default LanDiceD4Solid;

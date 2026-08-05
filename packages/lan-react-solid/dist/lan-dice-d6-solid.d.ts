import React from 'react';

export interface LanDiceD6SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD6Solid(props: LanDiceD6SolidProps): React.ReactElement;
export default LanDiceD6Solid;

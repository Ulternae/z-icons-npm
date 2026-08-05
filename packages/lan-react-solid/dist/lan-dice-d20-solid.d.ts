import React from 'react';

export interface LanDiceD20SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD20Solid(props: LanDiceD20SolidProps): React.ReactElement;
export default LanDiceD20Solid;

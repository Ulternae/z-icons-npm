import React from 'react';

export interface LanDiceD12SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD12Solid(props: LanDiceD12SolidProps): React.ReactElement;
export default LanDiceD12Solid;

import React from 'react';

export interface LanDiceD8SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD8Solid(props: LanDiceD8SolidProps): React.ReactElement;
export default LanDiceD8Solid;

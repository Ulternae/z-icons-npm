import React from 'react';

export interface LanDiceD10SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceD10Solid(props: LanDiceD10SolidProps): React.ReactElement;
export default LanDiceD10Solid;

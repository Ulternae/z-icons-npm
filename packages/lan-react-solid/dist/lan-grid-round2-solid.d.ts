import React from 'react';

export interface LanGridRound2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRound2Solid(props: LanGridRound2SolidProps): React.ReactElement;
export default LanGridRound2Solid;

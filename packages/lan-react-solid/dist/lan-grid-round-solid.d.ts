import React from 'react';

export interface LanGridRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRoundSolid(props: LanGridRoundSolidProps): React.ReactElement;
export default LanGridRoundSolid;

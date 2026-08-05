import React from 'react';

export interface LanGridRound2PlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRound2PlusSolid(props: LanGridRound2PlusSolidProps): React.ReactElement;
export default LanGridRound2PlusSolid;

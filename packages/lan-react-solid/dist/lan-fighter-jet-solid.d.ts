import React from 'react';

export interface LanFighterJetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFighterJetSolid(props: LanFighterJetSolidProps): React.ReactElement;
export default LanFighterJetSolid;

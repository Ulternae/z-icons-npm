import React from 'react';

export interface LanFighterJetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFighterJetSolid: React.FC<LanFighterJetSolidProps>;
export default LanFighterJetSolid;

import React from 'react';

export interface LanJetFighterUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJetFighterUpSolid: React.FC<LanJetFighterUpSolidProps>;
export default LanJetFighterUpSolid;

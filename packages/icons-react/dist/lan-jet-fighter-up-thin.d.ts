import React from 'react';

export interface LanJetFighterUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJetFighterUpThin: React.FC<LanJetFighterUpThinProps>;
export default LanJetFighterUpThin;

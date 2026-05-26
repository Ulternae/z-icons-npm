import React from 'react';

export interface LanFighterJetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFighterJetThin: React.FC<LanFighterJetThinProps>;
export default LanFighterJetThin;

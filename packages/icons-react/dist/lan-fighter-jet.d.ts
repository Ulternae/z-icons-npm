import React from 'react';

export interface LanFighterJetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFighterJet: React.FC<LanFighterJetProps>;
export default LanFighterJet;

import React from 'react';

export interface LanJetFighterUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJetFighterUp: React.FC<LanJetFighterUpProps>;
export default LanJetFighterUp;

import React from 'react';

export interface LanFighterJetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFighterJetRegular: React.FC<LanFighterJetRegularProps>;
export default LanFighterJetRegular;

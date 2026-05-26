import React from 'react';

export interface LanJetFighterUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJetFighterUpRegular: React.FC<LanJetFighterUpRegularProps>;
export default LanJetFighterUpRegular;

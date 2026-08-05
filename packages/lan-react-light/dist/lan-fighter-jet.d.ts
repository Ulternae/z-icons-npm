import React from 'react';

export interface LanFighterJetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFighterJet(props: LanFighterJetProps): React.ReactElement;
export default LanFighterJet;

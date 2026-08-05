import React from 'react';

export interface LanFighterJetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFighterJetThin(props: LanFighterJetThinProps): React.ReactElement;
export default LanFighterJetThin;

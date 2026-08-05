import React from 'react';

export interface LanJetFighterUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJetFighterUpThin(props: LanJetFighterUpThinProps): React.ReactElement;
export default LanJetFighterUpThin;

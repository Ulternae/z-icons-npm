import React from 'react';

export interface LanJetFighterUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJetFighterUp(props: LanJetFighterUpProps): React.ReactElement;
export default LanJetFighterUp;

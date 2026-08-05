import React from 'react';

export interface LanJetFighterUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJetFighterUpSolid(props: LanJetFighterUpSolidProps): React.ReactElement;
export default LanJetFighterUpSolid;

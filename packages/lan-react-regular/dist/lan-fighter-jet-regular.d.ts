import React from 'react';

export interface LanFighterJetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFighterJetRegular(props: LanFighterJetRegularProps): React.ReactElement;
export default LanFighterJetRegular;

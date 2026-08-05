import React from 'react';

export interface LanFlaskRoundPoisonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskRoundPoison(props: LanFlaskRoundPoisonProps): React.ReactElement;
export default LanFlaskRoundPoison;

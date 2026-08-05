import React from 'react';

export interface LanFireBurnerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireBurnerThin(props: LanFireBurnerThinProps): React.ReactElement;
export default LanFireBurnerThin;

import React from 'react';

export interface LanFireBurnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireBurnerSolid(props: LanFireBurnerSolidProps): React.ReactElement;
export default LanFireBurnerSolid;

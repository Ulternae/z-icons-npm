import React from 'react';

export interface LanFaucetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucetSolid(props: LanFaucetSolidProps): React.ReactElement;
export default LanFaucetSolid;

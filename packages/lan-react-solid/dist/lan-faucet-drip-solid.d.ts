import React from 'react';

export interface LanFaucetDripSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucetDripSolid(props: LanFaucetDripSolidProps): React.ReactElement;
export default LanFaucetDripSolid;

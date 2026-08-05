import React from 'react';

export interface LanFaucetDripProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucetDrip(props: LanFaucetDripProps): React.ReactElement;
export default LanFaucetDrip;

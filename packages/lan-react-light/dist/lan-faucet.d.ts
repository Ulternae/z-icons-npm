import React from 'react';

export interface LanFaucetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucet(props: LanFaucetProps): React.ReactElement;
export default LanFaucet;

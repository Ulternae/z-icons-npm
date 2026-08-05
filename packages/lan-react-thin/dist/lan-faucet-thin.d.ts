import React from 'react';

export interface LanFaucetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucetThin(props: LanFaucetThinProps): React.ReactElement;
export default LanFaucetThin;

import React from 'react';

export interface LanFaucetDripThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucetDripThin(props: LanFaucetDripThinProps): React.ReactElement;
export default LanFaucetDripThin;

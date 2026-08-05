import React from 'react';

export interface LanFaucetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucetRegular(props: LanFaucetRegularProps): React.ReactElement;
export default LanFaucetRegular;

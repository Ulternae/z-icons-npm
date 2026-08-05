import React from 'react';

export interface LanFaucetDripRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaucetDripRegular(props: LanFaucetDripRegularProps): React.ReactElement;
export default LanFaucetDripRegular;

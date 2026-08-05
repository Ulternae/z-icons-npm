import React from 'react';

export interface LanCoinFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinFrontRegular(props: LanCoinFrontRegularProps): React.ReactElement;
export default LanCoinFrontRegular;

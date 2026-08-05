import React from 'react';

export interface LanCoinBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoinBlankRegular(props: LanCoinBlankRegularProps): React.ReactElement;
export default LanCoinBlankRegular;

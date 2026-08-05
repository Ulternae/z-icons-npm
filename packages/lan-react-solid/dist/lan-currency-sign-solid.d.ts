import React from 'react';

export interface LanCurrencySignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCurrencySignSolid(props: LanCurrencySignSolidProps): React.ReactElement;
export default LanCurrencySignSolid;

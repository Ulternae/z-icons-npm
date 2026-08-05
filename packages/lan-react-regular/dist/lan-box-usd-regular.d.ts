import React from 'react';

export interface LanBoxUsdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxUsdRegular(props: LanBoxUsdRegularProps): React.ReactElement;
export default LanBoxUsdRegular;

import React from 'react';

export interface LanSocksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSocksRegular(props: LanSocksRegularProps): React.ReactElement;
export default LanSocksRegular;

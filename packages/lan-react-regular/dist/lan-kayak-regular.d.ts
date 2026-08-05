import React from 'react';

export interface LanKayakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKayakRegular(props: LanKayakRegularProps): React.ReactElement;
export default LanKayakRegular;

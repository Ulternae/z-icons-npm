import React from 'react';

export interface LanAriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAriesRegular(props: LanAriesRegularProps): React.ReactElement;
export default LanAriesRegular;

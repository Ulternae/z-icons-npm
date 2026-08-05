import React from 'react';

export interface LanBarProgressFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressFullRegular(props: LanBarProgressFullRegularProps): React.ReactElement;
export default LanBarProgressFullRegular;

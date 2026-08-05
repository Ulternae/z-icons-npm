import React from 'react';

export interface LanBoxOpenFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxOpenFullRegular(props: LanBoxOpenFullRegularProps): React.ReactElement;
export default LanBoxOpenFullRegular;

import React from 'react';

export interface LanHeptagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeptagonRegular(props: LanHeptagonRegularProps): React.ReactElement;
export default LanHeptagonRegular;

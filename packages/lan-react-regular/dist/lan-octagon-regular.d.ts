import React from 'react';

export interface LanOctagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonRegular(props: LanOctagonRegularProps): React.ReactElement;
export default LanOctagonRegular;

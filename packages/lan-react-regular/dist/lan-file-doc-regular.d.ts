import React from 'react';

export interface LanFileDocRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDocRegular(props: LanFileDocRegularProps): React.ReactElement;
export default LanFileDocRegular;

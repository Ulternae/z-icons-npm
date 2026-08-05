import React from 'react';

export interface LanFileWordRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWordRegular(props: LanFileWordRegularProps): React.ReactElement;
export default LanFileWordRegular;

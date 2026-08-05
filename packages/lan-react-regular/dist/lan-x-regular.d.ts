import React from 'react';

export interface LanXRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXRegular(props: LanXRegularProps): React.ReactElement;
export default LanXRegular;

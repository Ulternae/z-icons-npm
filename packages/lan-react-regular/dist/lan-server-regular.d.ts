import React from 'react';

export interface LanServerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanServerRegular(props: LanServerRegularProps): React.ReactElement;
export default LanServerRegular;

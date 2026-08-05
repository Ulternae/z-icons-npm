import React from 'react';

export interface LanGarlicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarlicRegular(props: LanGarlicRegularProps): React.ReactElement;
export default LanGarlicRegular;

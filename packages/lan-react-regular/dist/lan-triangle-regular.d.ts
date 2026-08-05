import React from 'react';

export interface LanTriangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleRegular(props: LanTriangleRegularProps): React.ReactElement;
export default LanTriangleRegular;

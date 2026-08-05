import React from 'react';

export interface LanRectanglesMixedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglesMixedRegular(props: LanRectanglesMixedRegularProps): React.ReactElement;
export default LanRectanglesMixedRegular;

import React from 'react';

export interface LanRectangleApiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleApiRegular(props: LanRectangleApiRegularProps): React.ReactElement;
export default LanRectangleApiRegular;

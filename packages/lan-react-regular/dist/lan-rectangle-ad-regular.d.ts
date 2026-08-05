import React from 'react';

export interface LanRectangleAdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleAdRegular(props: LanRectangleAdRegularProps): React.ReactElement;
export default LanRectangleAdRegular;

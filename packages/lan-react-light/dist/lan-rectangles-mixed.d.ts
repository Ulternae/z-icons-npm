import React from 'react';

export interface LanRectanglesMixedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglesMixed(props: LanRectanglesMixedProps): React.ReactElement;
export default LanRectanglesMixed;

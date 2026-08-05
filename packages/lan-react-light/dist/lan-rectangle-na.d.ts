import React from 'react';

export interface LanRectangleNAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNA(props: LanRectangleNAProps): React.ReactElement;
export default LanRectangleNA;

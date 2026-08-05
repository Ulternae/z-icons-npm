import React from 'react';

export interface LanRectangle4kProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangle4k(props: LanRectangle4kProps): React.ReactElement;
export default LanRectangle4k;

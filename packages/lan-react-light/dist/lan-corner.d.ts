import React from 'react';

export interface LanCornerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCorner(props: LanCornerProps): React.ReactElement;
export default LanCorner;

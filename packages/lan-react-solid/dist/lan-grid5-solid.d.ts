import React from 'react';

export interface LanGrid5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid5Solid(props: LanGrid5SolidProps): React.ReactElement;
export default LanGrid5Solid;

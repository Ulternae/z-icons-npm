import React from 'react';

export interface LanH5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH5Solid(props: LanH5SolidProps): React.ReactElement;
export default LanH5Solid;

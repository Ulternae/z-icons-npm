import React from 'react';

export interface LanH4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH4Solid(props: LanH4SolidProps): React.ReactElement;
export default LanH4Solid;

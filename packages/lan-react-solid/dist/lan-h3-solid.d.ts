import React from 'react';

export interface LanH3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH3Solid(props: LanH3SolidProps): React.ReactElement;
export default LanH3Solid;

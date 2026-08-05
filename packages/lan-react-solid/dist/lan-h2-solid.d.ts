import React from 'react';

export interface LanH2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH2Solid(props: LanH2SolidProps): React.ReactElement;
export default LanH2Solid;

import React from 'react';

export interface LanScribbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScribbleSolid(props: LanScribbleSolidProps): React.ReactElement;
export default LanScribbleSolid;

import React from 'react';

export interface LanForkKnifeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForkKnifeSolid(props: LanForkKnifeSolidProps): React.ReactElement;
export default LanForkKnifeSolid;

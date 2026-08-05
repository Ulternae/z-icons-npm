import React from 'react';

export interface LanFaceExplodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExplodeSolid(props: LanFaceExplodeSolidProps): React.ReactElement;
export default LanFaceExplodeSolid;

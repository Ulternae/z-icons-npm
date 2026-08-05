import React from 'react';

export interface LanFaceGrinStarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinStarsSolid(props: LanFaceGrinStarsSolidProps): React.ReactElement;
export default LanFaceGrinStarsSolid;

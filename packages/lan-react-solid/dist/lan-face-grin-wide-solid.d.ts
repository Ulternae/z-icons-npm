import React from 'react';

export interface LanFaceGrinWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinWideSolid(props: LanFaceGrinWideSolidProps): React.ReactElement;
export default LanFaceGrinWideSolid;

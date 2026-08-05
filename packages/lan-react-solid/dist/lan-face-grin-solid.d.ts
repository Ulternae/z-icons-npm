import React from 'react';

export interface LanFaceGrinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinSolid(props: LanFaceGrinSolidProps): React.ReactElement;
export default LanFaceGrinSolid;

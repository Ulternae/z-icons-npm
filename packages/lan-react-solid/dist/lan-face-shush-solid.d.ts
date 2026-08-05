import React from 'react';

export interface LanFaceShushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceShushSolid(props: LanFaceShushSolidProps): React.ReactElement;
export default LanFaceShushSolid;

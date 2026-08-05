import React from 'react';

export interface LanFaceZipperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZipperSolid(props: LanFaceZipperSolidProps): React.ReactElement;
export default LanFaceZipperSolid;

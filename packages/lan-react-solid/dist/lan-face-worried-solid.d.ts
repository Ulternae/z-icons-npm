import React from 'react';

export interface LanFaceWorriedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWorriedSolid(props: LanFaceWorriedSolidProps): React.ReactElement;
export default LanFaceWorriedSolid;

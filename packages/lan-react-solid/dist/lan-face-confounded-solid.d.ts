import React from 'react';

export interface LanFaceConfoundedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceConfoundedSolid(props: LanFaceConfoundedSolidProps): React.ReactElement;
export default LanFaceConfoundedSolid;

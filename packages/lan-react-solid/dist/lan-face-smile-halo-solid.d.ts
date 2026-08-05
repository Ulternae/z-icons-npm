import React from 'react';

export interface LanFaceSmileHaloSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileHaloSolid(props: LanFaceSmileHaloSolidProps): React.ReactElement;
export default LanFaceSmileHaloSolid;

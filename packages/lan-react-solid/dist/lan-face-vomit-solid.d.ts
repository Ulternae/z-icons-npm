import React from 'react';

export interface LanFaceVomitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceVomitSolid(props: LanFaceVomitSolidProps): React.ReactElement;
export default LanFaceVomitSolid;

import React from 'react';

export interface LanFaceScreamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceScreamSolid(props: LanFaceScreamSolidProps): React.ReactElement;
export default LanFaceScreamSolid;

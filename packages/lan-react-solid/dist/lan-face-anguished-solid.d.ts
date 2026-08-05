import React from 'react';

export interface LanFaceAnguishedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceAnguishedSolid(props: LanFaceAnguishedSolidProps): React.ReactElement;
export default LanFaceAnguishedSolid;

import React from 'react';

export interface LanFaceMonocleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMonocleSolid(props: LanFaceMonocleSolidProps): React.ReactElement;
export default LanFaceMonocleSolid;

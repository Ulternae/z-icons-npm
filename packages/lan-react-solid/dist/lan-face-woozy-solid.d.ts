import React from 'react';

export interface LanFaceWoozySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWoozySolid(props: LanFaceWoozySolidProps): React.ReactElement;
export default LanFaceWoozySolid;

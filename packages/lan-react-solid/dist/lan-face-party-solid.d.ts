import React from 'react';

export interface LanFacePartySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePartySolid(props: LanFacePartySolidProps): React.ReactElement;
export default LanFacePartySolid;

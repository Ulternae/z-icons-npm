import React from 'react';

export interface LanFaceAngrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceAngrySolid: React.FC<LanFaceAngrySolidProps>;
export default LanFaceAngrySolid;

import React from 'react';

export interface LanBroomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroomSolid: React.FC<LanBroomSolidProps>;
export default LanBroomSolid;

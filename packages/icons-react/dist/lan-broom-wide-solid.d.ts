import React from 'react';

export interface LanBroomWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroomWideSolid: React.FC<LanBroomWideSolidProps>;
export default LanBroomWideSolid;

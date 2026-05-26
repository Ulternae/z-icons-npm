import React from 'react';

export interface LanBroomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroom: React.FC<LanBroomProps>;
export default LanBroom;

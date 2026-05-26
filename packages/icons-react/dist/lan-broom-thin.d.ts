import React from 'react';

export interface LanBroomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroomThin: React.FC<LanBroomThinProps>;
export default LanBroomThin;

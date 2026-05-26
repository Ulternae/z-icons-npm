import React from 'react';

export interface LanBroomWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroomWideThin: React.FC<LanBroomWideThinProps>;
export default LanBroomWideThin;

import React from 'react';

export interface LanBroomWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroomWide: React.FC<LanBroomWideProps>;
export default LanBroomWide;

import React from 'react';

export interface LanBroomWideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroomWideRegular: React.FC<LanBroomWideRegularProps>;
export default LanBroomWideRegular;

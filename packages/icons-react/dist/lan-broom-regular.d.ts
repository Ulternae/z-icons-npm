import React from 'react';

export interface LanBroomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroomRegular: React.FC<LanBroomRegularProps>;
export default LanBroomRegular;

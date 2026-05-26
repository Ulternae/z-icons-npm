import React from 'react';

export interface LanBullseyePointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyePointerSolid: React.FC<LanBullseyePointerSolidProps>;
export default LanBullseyePointerSolid;

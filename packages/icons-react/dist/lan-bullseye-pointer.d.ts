import React from 'react';

export interface LanBullseyePointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyePointer: React.FC<LanBullseyePointerProps>;
export default LanBullseyePointer;

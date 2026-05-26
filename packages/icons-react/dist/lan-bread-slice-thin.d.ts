import React from 'react';

export interface LanBreadSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadSliceThin: React.FC<LanBreadSliceThinProps>;
export default LanBreadSliceThin;

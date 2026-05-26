import React from 'react';

export interface LanBorderNoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderNoneThin: React.FC<LanBorderNoneThinProps>;
export default LanBorderNoneThin;

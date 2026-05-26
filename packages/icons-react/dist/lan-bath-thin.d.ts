import React from 'react';

export interface LanBathThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBathThin: React.FC<LanBathThinProps>;
export default LanBathThin;

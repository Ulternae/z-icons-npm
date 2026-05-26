import React from 'react';

export interface LanPipeValveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeValveThin: React.FC<LanPipeValveThinProps>;
export default LanPipeValveThin;

import React from 'react';

export interface LanMegaphoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMegaphone: React.FC<LanMegaphoneProps>;
export default LanMegaphone;

import React from 'react';

export interface LanPipeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipe: React.FC<LanPipeProps>;
export default LanPipe;

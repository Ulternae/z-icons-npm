import React from 'react';

export interface LanPipeCollarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCollarThin: React.FC<LanPipeCollarThinProps>;
export default LanPipeCollarThin;

import React from 'react';

export interface LanPipeCollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeCollar: React.FC<LanPipeCollarProps>;
export default LanPipeCollar;

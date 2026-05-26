import React from 'react';

export interface LanBorderStyleAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderStyleAlt: React.FC<LanBorderStyleAltProps>;
export default LanBorderStyleAlt;

import React from 'react';

export interface LanUnicornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicorn: React.FC<LanUnicornProps>;
export default LanUnicorn;

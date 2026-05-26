import React from 'react';

export interface LanOrnamentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOrnament: React.FC<LanOrnamentProps>;
export default LanOrnament;

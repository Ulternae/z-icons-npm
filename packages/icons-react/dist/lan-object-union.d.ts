import React from 'react';

export interface LanObjectUnionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectUnion: React.FC<LanObjectUnionProps>;
export default LanObjectUnion;

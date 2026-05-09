import React from 'react';

export interface MinaUnionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUnion: React.FC<MinaUnionProps>;
export default MinaUnion;

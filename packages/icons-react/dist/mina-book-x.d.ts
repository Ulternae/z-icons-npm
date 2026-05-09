import React from 'react';

export interface MinaBookXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookX: React.FC<MinaBookXProps>;
export default MinaBookX;

import React from 'react';

export interface MinaAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlt: React.FC<MinaAltProps>;
export default MinaAlt;

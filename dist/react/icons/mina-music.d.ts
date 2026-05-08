import React from 'react';

export interface MinaMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusic: React.FC<MinaMusicProps>;
export default MinaMusic;

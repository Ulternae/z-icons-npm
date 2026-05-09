import React from 'react';

export interface MinaEclipseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEclipse: React.FC<MinaEclipseProps>;
export default MinaEclipse;

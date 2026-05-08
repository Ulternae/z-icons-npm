import React from 'react';

export interface MinaCopyrightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCopyright: React.FC<MinaCopyrightProps>;
export default MinaCopyright;

import React from 'react';

export interface MinaCopyleftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCopyleft: React.FC<MinaCopyleftProps>;
export default MinaCopyleft;

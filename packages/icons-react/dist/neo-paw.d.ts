import React from 'react';

export interface NeoPawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaw: React.FC<NeoPawProps>;
export default NeoPaw;

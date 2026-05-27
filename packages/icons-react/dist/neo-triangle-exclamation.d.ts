import React from 'react';

export interface NeoTriangleExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTriangleExclamation: React.FC<NeoTriangleExclamationProps>;
export default NeoTriangleExclamation;

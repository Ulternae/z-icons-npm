import React from 'react';

export interface LanExclamationTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExclamationTriangle: React.FC<LanExclamationTriangleProps>;
export default LanExclamationTriangle;

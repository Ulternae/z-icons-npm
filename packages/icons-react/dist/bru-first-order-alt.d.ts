import React from 'react';

export interface BruFirstOrderAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFirstOrderAlt: React.FC<BruFirstOrderAltProps>;
export default BruFirstOrderAlt;

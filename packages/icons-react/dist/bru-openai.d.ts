import React from 'react';

export interface BruOpenaiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOpenai: React.FC<BruOpenaiProps>;
export default BruOpenai;

import React from 'react';

export interface BruInstagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruInstagram: React.FC<BruInstagramProps>;
export default BruInstagram;

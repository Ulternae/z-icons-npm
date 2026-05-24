import React from 'react';

export interface BruAudibleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAudible: React.FC<BruAudibleProps>;
export default BruAudible;

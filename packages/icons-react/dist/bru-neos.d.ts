import React from 'react';

export interface BruNeosProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNeos: React.FC<BruNeosProps>;
export default BruNeos;

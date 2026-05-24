import React from 'react';

export interface BruGruntProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGrunt: React.FC<BruGruntProps>;
export default BruGrunt;

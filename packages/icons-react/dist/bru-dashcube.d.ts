import React from 'react';

export interface BruDashcubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDashcube: React.FC<BruDashcubeProps>;
export default BruDashcube;

import React from 'react';

export interface MinaCigaretteOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCigaretteOff: React.FC<MinaCigaretteOffProps>;
export default MinaCigaretteOff;

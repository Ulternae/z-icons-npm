import React from 'react';

export interface MinaCigaretteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCigarette: React.FC<MinaCigaretteProps>;
export default MinaCigarette;

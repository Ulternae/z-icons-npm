import React from 'react';

export interface MinaCigaretteOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCigaretteOffSolid: React.FC<MinaCigaretteOffSolidProps>;
export default MinaCigaretteOffSolid;

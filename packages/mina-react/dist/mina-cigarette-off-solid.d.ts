import React from 'react';

export interface MinaCigaretteOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCigaretteOffSolid(props: MinaCigaretteOffSolidProps): React.ReactElement;
export default MinaCigaretteOffSolid;

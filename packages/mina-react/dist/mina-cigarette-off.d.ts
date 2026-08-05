import React from 'react';

export interface MinaCigaretteOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCigaretteOff(props: MinaCigaretteOffProps): React.ReactElement;
export default MinaCigaretteOff;

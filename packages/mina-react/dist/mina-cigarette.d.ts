import React from 'react';

export interface MinaCigaretteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCigarette(props: MinaCigaretteProps): React.ReactElement;
export default MinaCigarette;

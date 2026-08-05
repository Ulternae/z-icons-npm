import React from 'react';

export interface MinaCigaretteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCigaretteSolid(props: MinaCigaretteSolidProps): React.ReactElement;
export default MinaCigaretteSolid;

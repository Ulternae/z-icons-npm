import React from 'react';

export interface MinaCroissantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCroissantSolid(props: MinaCroissantSolidProps): React.ReactElement;
export default MinaCroissantSolid;

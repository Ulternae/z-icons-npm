import React from 'react';

export interface NeoUtensilsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUtensilsSolid(props: NeoUtensilsSolidProps): React.ReactElement;
export default NeoUtensilsSolid;

import React from 'react';

export interface NeoUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUtensils(props: NeoUtensilsProps): React.ReactElement;
export default NeoUtensils;

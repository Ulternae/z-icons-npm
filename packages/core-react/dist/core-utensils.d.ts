import React from 'react';

export interface CoreUtensilsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUtensils(props: CoreUtensilsProps): React.ReactElement;
export default CoreUtensils;

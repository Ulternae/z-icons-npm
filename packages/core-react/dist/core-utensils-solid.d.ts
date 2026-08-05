import React from 'react';

export interface CoreUtensilsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUtensilsSolid(props: CoreUtensilsSolidProps): React.ReactElement;
export default CoreUtensilsSolid;

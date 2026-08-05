import React from 'react';

export interface LanUtensilSpoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtensilSpoon(props: LanUtensilSpoonProps): React.ReactElement;
export default LanUtensilSpoon;

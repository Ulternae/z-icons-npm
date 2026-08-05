import React from 'react';

export interface MinaCookieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCookieSolid(props: MinaCookieSolidProps): React.ReactElement;
export default MinaCookieSolid;

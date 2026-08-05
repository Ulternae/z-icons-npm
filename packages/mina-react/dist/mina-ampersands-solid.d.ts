import React from 'react';

export interface MinaAmpersandsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmpersandsSolid(props: MinaAmpersandsSolidProps): React.ReactElement;
export default MinaAmpersandsSolid;

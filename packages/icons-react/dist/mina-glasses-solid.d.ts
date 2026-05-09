import React from 'react';

export interface MinaGlassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGlassesSolid: React.FC<MinaGlassesSolidProps>;
export default MinaGlassesSolid;

import React from 'react';

export interface MinaDislikeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDislikeSolid: React.FC<MinaDislikeSolidProps>;
export default MinaDislikeSolid;

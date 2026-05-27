import React from 'react';

export interface NeoCrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCrownSolid: React.FC<NeoCrownSolidProps>;
export default NeoCrownSolid;

import React from 'react';

export interface NeoBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBusSolid: React.FC<NeoBusSolidProps>;
export default NeoBusSolid;

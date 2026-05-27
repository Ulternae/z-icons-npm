import React from 'react';

export interface NeoMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMinusSolid: React.FC<NeoMinusSolidProps>;
export default NeoMinusSolid;

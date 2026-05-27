import React from 'react';

export interface NeoCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCirclePlusSolid: React.FC<NeoCirclePlusSolidProps>;
export default NeoCirclePlusSolid;

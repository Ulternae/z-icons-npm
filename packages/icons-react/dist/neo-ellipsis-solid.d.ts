import React from 'react';

export interface NeoEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEllipsisSolid: React.FC<NeoEllipsisSolidProps>;
export default NeoEllipsisSolid;

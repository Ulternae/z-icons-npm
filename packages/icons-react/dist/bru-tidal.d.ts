import React from 'react';

export interface BruTidalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTidal: React.FC<BruTidalProps>;
export default BruTidal;

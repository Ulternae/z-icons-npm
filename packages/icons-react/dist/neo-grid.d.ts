import React from 'react';

export interface NeoGridProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGrid: React.FC<NeoGridProps>;
export default NeoGrid;

import React from 'react';

export interface MinaGridProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGrid: React.FC<MinaGridProps>;
export default MinaGrid;

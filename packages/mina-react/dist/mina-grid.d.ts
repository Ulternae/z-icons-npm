import React from 'react';

export interface MinaGridProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGrid(props: MinaGridProps): React.ReactElement;
export default MinaGrid;

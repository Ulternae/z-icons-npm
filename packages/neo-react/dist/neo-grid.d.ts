import React from 'react';

export interface NeoGridProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGrid(props: NeoGridProps): React.ReactElement;
export default NeoGrid;

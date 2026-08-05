import React from 'react';

export interface MinaHazeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHazeSolid(props: MinaHazeSolidProps): React.ReactElement;
export default MinaHazeSolid;

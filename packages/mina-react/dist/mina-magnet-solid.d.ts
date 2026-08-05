import React from 'react';

export interface MinaMagnetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMagnetSolid(props: MinaMagnetSolidProps): React.ReactElement;
export default MinaMagnetSolid;

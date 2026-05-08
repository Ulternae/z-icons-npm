import React from 'react';

export interface MinaVolumeXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeXSolid: React.FC<MinaVolumeXSolidProps>;
export default MinaVolumeXSolid;

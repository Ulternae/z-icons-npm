import React from 'react';

export interface MinaVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeLowSolid: React.FC<MinaVolumeLowSolidProps>;
export default MinaVolumeLowSolid;

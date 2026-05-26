import React from 'react';

export interface LanFileEpsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileEpsSolid: React.FC<LanFileEpsSolidProps>;
export default LanFileEpsSolid;

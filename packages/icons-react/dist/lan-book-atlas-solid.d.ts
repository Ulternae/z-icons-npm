import React from 'react';

export interface LanBookAtlasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAtlasSolid: React.FC<LanBookAtlasSolidProps>;
export default LanBookAtlasSolid;

import React from 'react';

export interface LanFileXlsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXlsSolid: React.FC<LanFileXlsSolidProps>;
export default LanFileXlsSolid;

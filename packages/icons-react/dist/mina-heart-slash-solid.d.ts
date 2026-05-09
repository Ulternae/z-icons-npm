import React from 'react';

export interface MinaHeartSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartSlashSolid: React.FC<MinaHeartSlashSolidProps>;
export default MinaHeartSlashSolid;

import React from 'react';

export interface CoreHeartSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHeartSlashSolid: React.FC<CoreHeartSlashSolidProps>;
export default CoreHeartSlashSolid;

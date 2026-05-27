import React from 'react';

export interface CoreBellSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBellSlashSolid: React.FC<CoreBellSlashSolidProps>;
export default CoreBellSlashSolid;

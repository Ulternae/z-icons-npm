import React from 'react';

export interface CoreBoltSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoltSlashSolid: React.FC<CoreBoltSlashSolidProps>;
export default CoreBoltSlashSolid;

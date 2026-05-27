import React from 'react';

export interface CoreBoltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoltSlash: React.FC<CoreBoltSlashProps>;
export default CoreBoltSlash;

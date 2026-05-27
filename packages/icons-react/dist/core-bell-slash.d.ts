import React from 'react';

export interface CoreBellSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBellSlash: React.FC<CoreBellSlashProps>;
export default CoreBellSlash;

import React from 'react';

export interface CoreHeartSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHeartSlash: React.FC<CoreHeartSlashProps>;
export default CoreHeartSlash;

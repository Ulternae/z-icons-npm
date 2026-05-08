import React from 'react';

export interface MinaHeartSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartSlash: React.FC<MinaHeartSlashProps>;
export default MinaHeartSlash;

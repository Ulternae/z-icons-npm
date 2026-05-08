import React from 'react';

export interface MinaLocationSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationSlash: React.FC<MinaLocationSlashProps>;
export default MinaLocationSlash;

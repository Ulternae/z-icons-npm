import React from 'react';

export interface MinaEarSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEarSlash: React.FC<MinaEarSlashProps>;
export default MinaEarSlash;

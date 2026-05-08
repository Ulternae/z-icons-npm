import React from 'react';

export interface MinaBellSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellSlash: React.FC<MinaBellSlashProps>;
export default MinaBellSlash;

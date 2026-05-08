import React from 'react';

export interface MinaCopyrightSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCopyrightSlash: React.FC<MinaCopyrightSlashProps>;
export default MinaCopyrightSlash;

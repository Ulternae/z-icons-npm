import React from 'react';

export interface MinaCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCameraSlash: React.FC<MinaCameraSlashProps>;
export default MinaCameraSlash;

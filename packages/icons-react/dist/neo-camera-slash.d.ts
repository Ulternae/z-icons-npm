import React from 'react';

export interface NeoCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCameraSlash: React.FC<NeoCameraSlashProps>;
export default NeoCameraSlash;

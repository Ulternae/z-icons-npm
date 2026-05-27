import React from 'react';

export interface NeoCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCameraSlashSolid: React.FC<NeoCameraSlashSolidProps>;
export default NeoCameraSlashSolid;

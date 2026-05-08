import React from 'react';

export interface MinaCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCameraSlashSolid: React.FC<MinaCameraSlashSolidProps>;
export default MinaCameraSlashSolid;

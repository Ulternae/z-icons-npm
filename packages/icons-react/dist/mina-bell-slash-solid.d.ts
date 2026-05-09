import React from 'react';

export interface MinaBellSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellSlashSolid: React.FC<MinaBellSlashSolidProps>;
export default MinaBellSlashSolid;

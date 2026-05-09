import React from 'react';

export interface MinaBookSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookSlashSolid: React.FC<MinaBookSlashSolidProps>;
export default MinaBookSlashSolid;

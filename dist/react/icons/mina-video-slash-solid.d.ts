import React from 'react';

export interface MinaVideoSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVideoSlashSolid: React.FC<MinaVideoSlashSolidProps>;
export default MinaVideoSlashSolid;

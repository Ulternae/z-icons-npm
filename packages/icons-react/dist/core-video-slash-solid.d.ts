import React from 'react';

export interface CoreVideoSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVideoSlashSolid: React.FC<CoreVideoSlashSolidProps>;
export default CoreVideoSlashSolid;

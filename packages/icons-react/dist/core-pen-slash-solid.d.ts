import React from 'react';

export interface CorePenSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenSlashSolid: React.FC<CorePenSlashSolidProps>;
export default CorePenSlashSolid;

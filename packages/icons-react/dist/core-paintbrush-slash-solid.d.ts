import React from 'react';

export interface CorePaintbrushSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaintbrushSlashSolid: React.FC<CorePaintbrushSlashSolidProps>;
export default CorePaintbrushSlashSolid;

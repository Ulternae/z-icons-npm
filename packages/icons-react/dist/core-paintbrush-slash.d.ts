import React from 'react';

export interface CorePaintbrushSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaintbrushSlash: React.FC<CorePaintbrushSlashProps>;
export default CorePaintbrushSlash;

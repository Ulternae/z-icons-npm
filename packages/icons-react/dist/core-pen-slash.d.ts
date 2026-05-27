import React from 'react';

export interface CorePenSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenSlash: React.FC<CorePenSlashProps>;
export default CorePenSlash;

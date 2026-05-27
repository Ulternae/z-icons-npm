import React from 'react';

export interface CoreFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilter: React.FC<CoreFilterProps>;
export default CoreFilter;

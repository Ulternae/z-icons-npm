import React from 'react';

export interface NeoBedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBed: React.FC<NeoBedProps>;
export default NeoBed;

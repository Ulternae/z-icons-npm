import React from 'react';

export interface NeoBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBell: React.FC<NeoBellProps>;
export default NeoBell;

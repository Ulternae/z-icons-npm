import React from 'react';

export interface CoreBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBell: React.FC<CoreBellProps>;
export default CoreBell;

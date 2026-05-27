import React from 'react';

export interface CoreBellRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBellRingSolid: React.FC<CoreBellRingSolidProps>;
export default CoreBellRingSolid;

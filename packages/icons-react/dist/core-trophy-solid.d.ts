import React from 'react';

export interface CoreTrophySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrophySolid: React.FC<CoreTrophySolidProps>;
export default CoreTrophySolid;

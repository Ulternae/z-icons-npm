import React from 'react';

export interface CoreShareNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShareNodesSolid: React.FC<CoreShareNodesSolidProps>;
export default CoreShareNodesSolid;

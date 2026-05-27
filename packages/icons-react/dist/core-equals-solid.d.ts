import React from 'react';

export interface CoreEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEqualsSolid: React.FC<CoreEqualsSolidProps>;
export default CoreEqualsSolid;

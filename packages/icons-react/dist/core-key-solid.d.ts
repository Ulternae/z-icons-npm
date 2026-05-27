import React from 'react';

export interface CoreKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreKeySolid: React.FC<CoreKeySolidProps>;
export default CoreKeySolid;

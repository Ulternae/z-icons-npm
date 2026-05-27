import React from 'react';

export interface CoreUserPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserPlusSolid: React.FC<CoreUserPlusSolidProps>;
export default CoreUserPlusSolid;

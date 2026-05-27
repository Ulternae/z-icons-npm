import React from 'react';

export interface CoreLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLeafSolid: React.FC<CoreLeafSolidProps>;
export default CoreLeafSolid;

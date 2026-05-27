import React from 'react';

export interface CoreDisplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDisplaySolid: React.FC<CoreDisplaySolidProps>;
export default CoreDisplaySolid;

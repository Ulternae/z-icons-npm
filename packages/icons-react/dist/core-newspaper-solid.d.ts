import React from 'react';

export interface CoreNewspaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreNewspaperSolid: React.FC<CoreNewspaperSolidProps>;
export default CoreNewspaperSolid;

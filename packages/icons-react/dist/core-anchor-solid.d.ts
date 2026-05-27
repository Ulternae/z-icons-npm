import React from 'react';

export interface CoreAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAnchorSolid: React.FC<CoreAnchorSolidProps>;
export default CoreAnchorSolid;

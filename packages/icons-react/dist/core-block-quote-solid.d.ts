import React from 'react';

export interface CoreBlockQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBlockQuoteSolid: React.FC<CoreBlockQuoteSolidProps>;
export default CoreBlockQuoteSolid;

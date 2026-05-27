import React from 'react';

export interface CoreUniversalAccessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUniversalAccess: React.FC<CoreUniversalAccessProps>;
export default CoreUniversalAccess;

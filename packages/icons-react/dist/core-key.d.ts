import React from 'react';

export interface CoreKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreKey: React.FC<CoreKeyProps>;
export default CoreKey;

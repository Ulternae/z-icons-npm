import React from 'react';

export interface CoreAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAt: React.FC<CoreAtProps>;
export default CoreAt;

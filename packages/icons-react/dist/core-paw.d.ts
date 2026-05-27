import React from 'react';

export interface CorePawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaw: React.FC<CorePawProps>;
export default CorePaw;

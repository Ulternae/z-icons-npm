import React from 'react';

export interface CoreUserCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserCheck: React.FC<CoreUserCheckProps>;
export default CoreUserCheck;

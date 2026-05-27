import React from 'react';

export interface CoreUserPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserPlus: React.FC<CoreUserPlusProps>;
export default CoreUserPlus;

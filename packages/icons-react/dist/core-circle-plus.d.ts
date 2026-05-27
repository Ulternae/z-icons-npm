import React from 'react';

export interface CoreCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCirclePlus: React.FC<CoreCirclePlusProps>;
export default CoreCirclePlus;

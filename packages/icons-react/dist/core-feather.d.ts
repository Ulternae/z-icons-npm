import React from 'react';

export interface CoreFeatherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFeather: React.FC<CoreFeatherProps>;
export default CoreFeather;

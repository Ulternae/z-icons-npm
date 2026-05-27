import React from 'react';

export interface CoreMicrochipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMicrochip: React.FC<CoreMicrochipProps>;
export default CoreMicrochip;

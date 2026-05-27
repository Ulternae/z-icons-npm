import React from 'react';

export interface CoreHeadphonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHeadphones: React.FC<CoreHeadphonesProps>;
export default CoreHeadphones;

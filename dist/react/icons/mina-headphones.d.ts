import React from 'react';

export interface MinaHeadphonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadphones: React.FC<MinaHeadphonesProps>;
export default MinaHeadphones;

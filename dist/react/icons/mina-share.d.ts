import React from 'react';

export interface MinaShareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShare: React.FC<MinaShareProps>;
export default MinaShare;

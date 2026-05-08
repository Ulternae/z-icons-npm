import React from 'react';

export interface MinaTextAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTextAlignLeft: React.FC<MinaTextAlignLeftProps>;
export default MinaTextAlignLeft;

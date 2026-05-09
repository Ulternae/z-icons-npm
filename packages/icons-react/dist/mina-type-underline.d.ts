import React from 'react';

export interface MinaTypeUnderlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTypeUnderline: React.FC<MinaTypeUnderlineProps>;
export default MinaTypeUnderline;

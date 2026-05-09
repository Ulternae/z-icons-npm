import React from 'react';

export interface MinaTypeTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTypeText: React.FC<MinaTypeTextProps>;
export default MinaTypeText;

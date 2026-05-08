import React from 'react';

export interface MinaTextJustifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTextJustify: React.FC<MinaTextJustifyProps>;
export default MinaTextJustify;

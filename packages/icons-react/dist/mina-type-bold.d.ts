import React from 'react';

export interface MinaTypeBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTypeBold: React.FC<MinaTypeBoldProps>;
export default MinaTypeBold;

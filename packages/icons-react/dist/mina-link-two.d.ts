import React from 'react';

export interface MinaLinkTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLinkTwo: React.FC<MinaLinkTwoProps>;
export default MinaLinkTwo;

import React from 'react';

export interface MinaLinkOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLinkOne: React.FC<MinaLinkOneProps>;
export default MinaLinkOne;

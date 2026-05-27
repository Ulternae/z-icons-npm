import React from 'react';

export interface CoreLinkSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLinkSimple: React.FC<CoreLinkSimpleProps>;
export default CoreLinkSimple;

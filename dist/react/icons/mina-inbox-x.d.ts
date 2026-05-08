import React from 'react';

export interface MinaInboxXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxX: React.FC<MinaInboxXProps>;
export default MinaInboxX;

import React from 'react';

export interface MinaHashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHash: React.FC<MinaHashProps>;
export default MinaHash;

import React from 'react';

export interface BruSnapchatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSnapchat: React.FC<BruSnapchatProps>;
export default BruSnapchat;

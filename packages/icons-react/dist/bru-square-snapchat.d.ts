import React from 'react';

export interface BruSquareSnapchatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareSnapchat: React.FC<BruSquareSnapchatProps>;
export default BruSquareSnapchat;

import React from 'react';

export interface BruFlipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFlipboard: React.FC<BruFlipboardProps>;
export default BruFlipboard;

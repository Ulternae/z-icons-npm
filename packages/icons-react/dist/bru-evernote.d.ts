import React from 'react';

export interface BruEvernoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEvernote: React.FC<BruEvernoteProps>;
export default BruEvernote;

import React from 'react';

export interface BruQuinscapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruQuinscape: React.FC<BruQuinscapeProps>;
export default BruQuinscape;

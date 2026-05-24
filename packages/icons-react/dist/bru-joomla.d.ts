import React from 'react';

export interface BruJoomlaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJoomla: React.FC<BruJoomlaProps>;
export default BruJoomla;

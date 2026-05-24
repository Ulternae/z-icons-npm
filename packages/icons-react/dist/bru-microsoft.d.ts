import React from 'react';

export interface BruMicrosoftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMicrosoft: React.FC<BruMicrosoftProps>;
export default BruMicrosoft;

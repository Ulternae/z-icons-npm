import React from 'react';

export interface BruStudiovinariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStudiovinari: React.FC<BruStudiovinariProps>;
export default BruStudiovinari;

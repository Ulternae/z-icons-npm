import React from 'react';

export interface BruTypescriptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTypescript: React.FC<BruTypescriptProps>;
export default BruTypescript;

import React from 'react';

export interface BruFirstdraftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFirstdraft: React.FC<BruFirstdraftProps>;
export default BruFirstdraft;

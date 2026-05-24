import React from 'react';

export interface BruVimeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVimeo: React.FC<BruVimeoProps>;
export default BruVimeo;

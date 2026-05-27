import React from 'react';

export interface CoreWandMagicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWandMagic: React.FC<CoreWandMagicProps>;
export default CoreWandMagic;

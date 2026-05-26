import React from 'react';

export interface LanWandMagicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandMagic: React.FC<LanWandMagicProps>;
export default LanWandMagic;

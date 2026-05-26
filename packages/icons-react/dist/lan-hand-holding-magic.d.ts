import React from 'react';

export interface LanHandHoldingMagicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingMagic: React.FC<LanHandHoldingMagicProps>;
export default LanHandHoldingMagic;

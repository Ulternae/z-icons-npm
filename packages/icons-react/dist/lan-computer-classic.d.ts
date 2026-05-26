import React from 'react';

export interface LanComputerClassicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerClassic: React.FC<LanComputerClassicProps>;
export default LanComputerClassic;

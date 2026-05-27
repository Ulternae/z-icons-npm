import React from 'react';

export interface CoreComputerClassicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreComputerClassic: React.FC<CoreComputerClassicProps>;
export default CoreComputerClassic;

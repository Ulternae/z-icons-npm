import React from 'react';

export interface LanComputerClassicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerClassic(props: LanComputerClassicProps): React.ReactElement;
export default LanComputerClassic;

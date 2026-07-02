import React from 'react';

export interface CoreComputerClassicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreComputerClassic(props: CoreComputerClassicProps): React.ReactElement;
export default CoreComputerClassic;

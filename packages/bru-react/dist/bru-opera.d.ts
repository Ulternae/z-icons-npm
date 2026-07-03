import React from 'react';

export interface BruOperaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOpera(props: BruOperaProps): React.ReactElement;
export default BruOpera;

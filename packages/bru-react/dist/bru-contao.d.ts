import React from 'react';

export interface BruContaoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruContao(props: BruContaoProps): React.ReactElement;
export default BruContao;

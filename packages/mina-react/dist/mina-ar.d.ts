import React from 'react';

export interface MinaArProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAr(props: MinaArProps): React.ReactElement;
export default MinaAr;

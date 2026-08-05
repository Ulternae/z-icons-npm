import React from 'react';

export interface MinaZapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZap(props: MinaZapProps): React.ReactElement;
export default MinaZap;

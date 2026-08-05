import React from 'react';

export interface MinaZapOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZapOff(props: MinaZapOffProps): React.ReactElement;
export default MinaZapOff;

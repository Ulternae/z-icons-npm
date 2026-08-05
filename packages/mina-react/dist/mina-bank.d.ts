import React from 'react';

export interface MinaBankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBank(props: MinaBankProps): React.ReactElement;
export default MinaBank;

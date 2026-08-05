import React from 'react';

export interface MinaMessageXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageX(props: MinaMessageXProps): React.ReactElement;
export default MinaMessageX;

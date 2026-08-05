import React from 'react';

export interface MinaMessageCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessageCheck(props: MinaMessageCheckProps): React.ReactElement;
export default MinaMessageCheck;

import React from 'react';

export interface MinaInboxMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxMinus(props: MinaInboxMinusProps): React.ReactElement;
export default MinaInboxMinus;

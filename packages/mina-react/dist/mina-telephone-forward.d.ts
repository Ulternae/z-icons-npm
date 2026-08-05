import React from 'react';

export interface MinaTelephoneForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephoneForward(props: MinaTelephoneForwardProps): React.ReactElement;
export default MinaTelephoneForward;

import React from 'react';

export interface MinaTelephoneOutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephoneOut(props: MinaTelephoneOutProps): React.ReactElement;
export default MinaTelephoneOut;

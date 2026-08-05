import React from 'react';

export interface MinaTelephoneInProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephoneIn(props: MinaTelephoneInProps): React.ReactElement;
export default MinaTelephoneIn;

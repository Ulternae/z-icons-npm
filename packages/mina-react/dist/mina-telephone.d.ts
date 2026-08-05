import React from 'react';

export interface MinaTelephoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephone(props: MinaTelephoneProps): React.ReactElement;
export default MinaTelephone;

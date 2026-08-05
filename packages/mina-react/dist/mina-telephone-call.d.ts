import React from 'react';

export interface MinaTelephoneCallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephoneCall(props: MinaTelephoneCallProps): React.ReactElement;
export default MinaTelephoneCall;

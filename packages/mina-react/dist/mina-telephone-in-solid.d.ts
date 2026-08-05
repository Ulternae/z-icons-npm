import React from 'react';

export interface MinaTelephoneInSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephoneInSolid(props: MinaTelephoneInSolidProps): React.ReactElement;
export default MinaTelephoneInSolid;

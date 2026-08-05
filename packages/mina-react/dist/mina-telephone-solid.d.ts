import React from 'react';

export interface MinaTelephoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephoneSolid(props: MinaTelephoneSolidProps): React.ReactElement;
export default MinaTelephoneSolid;

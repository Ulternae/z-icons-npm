import React from 'react';

export interface MinaEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEnvelopeSolid(props: MinaEnvelopeSolidProps): React.ReactElement;
export default MinaEnvelopeSolid;

import React from 'react';

export interface NeoEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEnvelopeSolid(props: NeoEnvelopeSolidProps): React.ReactElement;
export default NeoEnvelopeSolid;

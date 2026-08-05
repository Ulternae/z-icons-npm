import React from 'react';

export interface NeoFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFire(props: NeoFireProps): React.ReactElement;
export default NeoFire;

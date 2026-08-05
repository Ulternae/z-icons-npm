import React from 'react';

export interface MinaOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneSolid(props: MinaOneSolidProps): React.ReactElement;
export default MinaOneSolid;

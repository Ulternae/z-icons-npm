import React from 'react';

export interface MinaForwardSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardSquareSolid(props: MinaForwardSquareSolidProps): React.ReactElement;
export default MinaForwardSquareSolid;

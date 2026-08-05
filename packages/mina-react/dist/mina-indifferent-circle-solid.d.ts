import React from 'react';

export interface MinaIndifferentCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIndifferentCircleSolid(props: MinaIndifferentCircleSolidProps): React.ReactElement;
export default MinaIndifferentCircleSolid;

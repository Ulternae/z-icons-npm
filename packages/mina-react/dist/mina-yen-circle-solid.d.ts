import React from 'react';

export interface MinaYenCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenCircleSolid(props: MinaYenCircleSolidProps): React.ReactElement;
export default MinaYenCircleSolid;

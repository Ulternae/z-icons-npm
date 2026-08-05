import React from 'react';

export interface MinaCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleSolid(props: MinaCircleSolidProps): React.ReactElement;
export default MinaCircleSolid;

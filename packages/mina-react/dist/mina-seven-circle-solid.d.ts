import React from 'react';

export interface MinaSevenCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenCircleSolid(props: MinaSevenCircleSolidProps): React.ReactElement;
export default MinaSevenCircleSolid;

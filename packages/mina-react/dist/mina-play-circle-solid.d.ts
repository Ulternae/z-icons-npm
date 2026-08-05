import React from 'react';

export interface MinaPlayCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayCircleSolid(props: MinaPlayCircleSolidProps): React.ReactElement;
export default MinaPlayCircleSolid;

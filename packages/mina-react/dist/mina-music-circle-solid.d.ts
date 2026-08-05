import React from 'react';

export interface MinaMusicCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicCircleSolid(props: MinaMusicCircleSolidProps): React.ReactElement;
export default MinaMusicCircleSolid;

import React from 'react';

export interface MinaBookHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookHomeSolid(props: MinaBookHomeSolidProps): React.ReactElement;
export default MinaBookHomeSolid;

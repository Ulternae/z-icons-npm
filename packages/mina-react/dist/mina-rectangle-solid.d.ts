import React from 'react';

export interface MinaRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRectangleSolid(props: MinaRectangleSolidProps): React.ReactElement;
export default MinaRectangleSolid;

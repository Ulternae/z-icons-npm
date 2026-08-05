import React from 'react';

export interface MinaImageRectangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaImageRectangleSolid(props: MinaImageRectangleSolidProps): React.ReactElement;
export default MinaImageRectangleSolid;

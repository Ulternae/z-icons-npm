import React from 'react';

export interface MinaImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaImageSolid(props: MinaImageSolidProps): React.ReactElement;
export default MinaImageSolid;

import React from 'react';

export interface CoreImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreImageSolid(props: CoreImageSolidProps): React.ReactElement;
export default CoreImageSolid;

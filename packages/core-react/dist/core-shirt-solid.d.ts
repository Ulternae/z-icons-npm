import React from 'react';

export interface CoreShirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShirtSolid(props: CoreShirtSolidProps): React.ReactElement;
export default CoreShirtSolid;

import React from 'react';

export interface MinaPencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPencil(props: MinaPencilProps): React.ReactElement;
export default MinaPencil;

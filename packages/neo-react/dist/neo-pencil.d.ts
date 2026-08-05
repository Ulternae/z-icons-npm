import React from 'react';

export interface NeoPencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPencil(props: NeoPencilProps): React.ReactElement;
export default NeoPencil;

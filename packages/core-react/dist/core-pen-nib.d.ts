import React from 'react';

export interface CorePenNibProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenNib(props: CorePenNibProps): React.ReactElement;
export default CorePenNib;

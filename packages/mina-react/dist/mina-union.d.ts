import React from 'react';

export interface MinaUnionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUnion(props: MinaUnionProps): React.ReactElement;
export default MinaUnion;

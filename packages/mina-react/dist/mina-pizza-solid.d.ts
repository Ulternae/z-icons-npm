import React from 'react';

export interface MinaPizzaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPizzaSolid(props: MinaPizzaSolidProps): React.ReactElement;
export default MinaPizzaSolid;

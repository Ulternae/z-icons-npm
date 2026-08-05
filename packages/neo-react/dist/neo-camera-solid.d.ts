import React from 'react';

export interface NeoCameraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCameraSolid(props: NeoCameraSolidProps): React.ReactElement;
export default NeoCameraSolid;

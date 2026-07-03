import React from 'react';

export interface BruPerbyteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPerbyte(props: BruPerbyteProps): React.ReactElement;
export default BruPerbyte;

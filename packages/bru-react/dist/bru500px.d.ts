import React from 'react';

export interface Bru500pxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Bru500px(props: Bru500pxProps): React.ReactElement;
export default Bru500px;

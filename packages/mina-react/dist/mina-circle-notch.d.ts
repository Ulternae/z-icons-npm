import React from 'react';

export interface MinaCircleNotchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleNotch(props: MinaCircleNotchProps): React.ReactElement;
export default MinaCircleNotch;

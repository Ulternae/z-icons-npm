import React from 'react';

export interface MinaMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMask(props: MinaMaskProps): React.ReactElement;
export default MinaMask;

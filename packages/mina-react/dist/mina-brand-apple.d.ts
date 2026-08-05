import React from 'react';

export interface MinaBrandAppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandApple(props: MinaBrandAppleProps): React.ReactElement;
export default MinaBrandApple;

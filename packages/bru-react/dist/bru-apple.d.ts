import React from 'react';

export interface BruAppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruApple(props: BruAppleProps): React.ReactElement;
export default BruApple;

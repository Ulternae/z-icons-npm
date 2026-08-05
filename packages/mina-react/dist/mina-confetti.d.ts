import React from 'react';

export interface MinaConfettiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaConfetti(props: MinaConfettiProps): React.ReactElement;
export default MinaConfetti;

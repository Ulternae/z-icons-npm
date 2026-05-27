import React from 'react';

export interface CoreDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDroplet: React.FC<CoreDropletProps>;
export default CoreDroplet;

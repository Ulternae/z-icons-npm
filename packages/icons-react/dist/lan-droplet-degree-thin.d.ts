import React from 'react';

export interface LanDropletDegreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletDegreeThin: React.FC<LanDropletDegreeThinProps>;
export default LanDropletDegreeThin;

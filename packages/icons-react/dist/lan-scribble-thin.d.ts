import React from 'react';

export interface LanScribbleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScribbleThin: React.FC<LanScribbleThinProps>;
export default LanScribbleThin;

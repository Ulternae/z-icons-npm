import React from 'react';

export interface LanGrateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrateThin: React.FC<LanGrateThinProps>;
export default LanGrateThin;

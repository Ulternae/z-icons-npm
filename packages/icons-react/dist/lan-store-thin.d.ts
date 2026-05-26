import React from 'react';

export interface LanStoreThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreThin: React.FC<LanStoreThinProps>;
export default LanStoreThin;

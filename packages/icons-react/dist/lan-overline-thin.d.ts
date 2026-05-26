import React from 'react';

export interface LanOverlineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOverlineThin: React.FC<LanOverlineThinProps>;
export default LanOverlineThin;

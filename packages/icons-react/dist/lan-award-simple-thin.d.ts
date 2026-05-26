import React from 'react';

export interface LanAwardSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAwardSimpleThin: React.FC<LanAwardSimpleThinProps>;
export default LanAwardSimpleThin;

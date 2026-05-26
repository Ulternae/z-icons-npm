import React from 'react';

export interface LanEngineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngineThin: React.FC<LanEngineThinProps>;
export default LanEngineThin;

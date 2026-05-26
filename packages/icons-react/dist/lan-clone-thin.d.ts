import React from 'react';

export interface LanCloneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloneThin: React.FC<LanCloneThinProps>;
export default LanCloneThin;

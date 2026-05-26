import React from 'react';

export interface LanClonePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClonePlusThin: React.FC<LanClonePlusThinProps>;
export default LanClonePlusThin;

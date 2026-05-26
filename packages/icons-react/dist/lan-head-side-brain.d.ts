import React from 'react';

export interface LanHeadSideBrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideBrain: React.FC<LanHeadSideBrainProps>;
export default LanHeadSideBrain;

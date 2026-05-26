import React from 'react';

export interface LanFaceGrinWinkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinWinkThin: React.FC<LanFaceGrinWinkThinProps>;
export default LanFaceGrinWinkThin;

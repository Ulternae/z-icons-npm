import React from 'react';

export interface LanFaceGrinTearsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinTearsThin: React.FC<LanFaceGrinTearsThinProps>;
export default LanFaceGrinTearsThin;

import React from 'react';

export interface LanFaceZanyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZanyThin: React.FC<LanFaceZanyThinProps>;
export default LanFaceZanyThin;

import React from 'react';

export interface LanFaceZanyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZany: React.FC<LanFaceZanyProps>;
export default LanFaceZany;

import React from 'react';

export interface LanFaceSmilingHandsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilingHandsThin: React.FC<LanFaceSmilingHandsThinProps>;
export default LanFaceSmilingHandsThin;

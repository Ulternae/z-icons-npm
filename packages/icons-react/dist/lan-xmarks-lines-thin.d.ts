import React from 'react';

export interface LanXmarksLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarksLinesThin: React.FC<LanXmarksLinesThinProps>;
export default LanXmarksLinesThin;

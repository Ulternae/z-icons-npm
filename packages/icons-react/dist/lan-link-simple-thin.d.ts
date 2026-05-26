import React from 'react';

export interface LanLinkSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimpleThin: React.FC<LanLinkSimpleThinProps>;
export default LanLinkSimpleThin;

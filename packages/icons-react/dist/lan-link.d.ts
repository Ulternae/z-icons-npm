import React from 'react';

export interface LanLinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLink: React.FC<LanLinkProps>;
export default LanLink;

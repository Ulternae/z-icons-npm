import React from 'react';

export interface LanFlowerTulipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlowerTulip: React.FC<LanFlowerTulipProps>;
export default LanFlowerTulip;

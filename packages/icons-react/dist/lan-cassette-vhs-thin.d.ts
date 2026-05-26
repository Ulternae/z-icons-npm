import React from 'react';

export interface LanCassetteVhsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteVhsThin: React.FC<LanCassetteVhsThinProps>;
export default LanCassetteVhsThin;

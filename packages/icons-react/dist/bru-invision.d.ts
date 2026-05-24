import React from 'react';

export interface BruInvisionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruInvision: React.FC<BruInvisionProps>;
export default BruInvision;

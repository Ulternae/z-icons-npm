import React from 'react';

export interface BruLumonDropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLumonDrop: React.FC<BruLumonDropProps>;
export default BruLumonDrop;

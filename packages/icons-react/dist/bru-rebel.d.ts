import React from 'react';

export interface BruRebelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRebel: React.FC<BruRebelProps>;
export default BruRebel;

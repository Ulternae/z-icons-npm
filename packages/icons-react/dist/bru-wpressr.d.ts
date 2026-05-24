import React from 'react';

export interface BruWpressrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWpressr: React.FC<BruWpressrProps>;
export default BruWpressr;

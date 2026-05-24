import React from 'react';

export interface BruTiktokProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTiktok: React.FC<BruTiktokProps>;
export default BruTiktok;

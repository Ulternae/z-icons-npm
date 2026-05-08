import React from 'react';

export interface MinaBrandPinterestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandPinterest: React.FC<MinaBrandPinterestProps>;
export default MinaBrandPinterest;

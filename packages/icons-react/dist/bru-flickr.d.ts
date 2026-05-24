import React from 'react';

export interface BruFlickrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFlickr: React.FC<BruFlickrProps>;
export default BruFlickr;

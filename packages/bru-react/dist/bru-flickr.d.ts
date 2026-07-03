import React from 'react';

export interface BruFlickrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFlickr(props: BruFlickrProps): React.ReactElement;
export default BruFlickr;

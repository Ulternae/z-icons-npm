import React from 'react';

export interface BruStumbleuponProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStumbleupon(props: BruStumbleuponProps): React.ReactElement;
export default BruStumbleupon;

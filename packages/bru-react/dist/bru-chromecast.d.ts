import React from 'react';

export interface BruChromecastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruChromecast(props: BruChromecastProps): React.ReactElement;
export default BruChromecast;

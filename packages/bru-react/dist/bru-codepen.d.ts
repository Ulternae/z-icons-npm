import React from 'react';

export interface BruCodepenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCodepen(props: BruCodepenProps): React.ReactElement;
export default BruCodepen;

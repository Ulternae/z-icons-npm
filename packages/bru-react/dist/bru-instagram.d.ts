import React from 'react';

export interface BruInstagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruInstagram(props: BruInstagramProps): React.ReactElement;
export default BruInstagram;

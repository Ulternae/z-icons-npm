import React from 'react';

export interface BruGetPocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGetPocket(props: BruGetPocketProps): React.ReactElement;
export default BruGetPocket;

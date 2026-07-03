import React from 'react';

export interface BruFedexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFedex(props: BruFedexProps): React.ReactElement;
export default BruFedex;

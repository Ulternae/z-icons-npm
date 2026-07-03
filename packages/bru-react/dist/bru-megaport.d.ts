import React from 'react';

export interface BruMegaportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMegaport(props: BruMegaportProps): React.ReactElement;
export default BruMegaport;

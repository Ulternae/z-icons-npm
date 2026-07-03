import React from 'react';

export interface BruFreebsdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFreebsd(props: BruFreebsdProps): React.ReactElement;
export default BruFreebsd;

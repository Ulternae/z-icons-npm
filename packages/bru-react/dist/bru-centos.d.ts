import React from 'react';

export interface BruCentosProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCentos(props: BruCentosProps): React.ReactElement;
export default BruCentos;

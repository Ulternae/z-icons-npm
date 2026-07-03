import React from 'react';

export interface BruMixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMix(props: BruMixProps): React.ReactElement;
export default BruMix;

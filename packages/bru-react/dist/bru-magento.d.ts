import React from 'react';

export interface BruMagentoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMagento(props: BruMagentoProps): React.ReactElement;
export default BruMagento;

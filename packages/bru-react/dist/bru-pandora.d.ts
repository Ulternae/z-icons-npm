import React from 'react';

export interface BruPandoraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPandora(props: BruPandoraProps): React.ReactElement;
export default BruPandora;

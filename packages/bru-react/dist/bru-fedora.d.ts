import React from 'react';

export interface BruFedoraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFedora(props: BruFedoraProps): React.ReactElement;
export default BruFedora;

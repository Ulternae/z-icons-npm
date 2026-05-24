import React from 'react';

export interface BruFedoraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFedora: React.FC<BruFedoraProps>;
export default BruFedora;

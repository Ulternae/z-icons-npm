import React from 'react';

export interface BruQuoraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruQuora(props: BruQuoraProps): React.ReactElement;
export default BruQuora;

import React from 'react';

export interface BruCodiepieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCodiepie(props: BruCodiepieProps): React.ReactElement;
export default BruCodiepie;

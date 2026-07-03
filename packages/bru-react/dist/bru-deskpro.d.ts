import React from 'react';

export interface BruDeskproProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDeskpro(props: BruDeskproProps): React.ReactElement;
export default BruDeskpro;

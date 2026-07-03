import React from 'react';

export interface BruBuromobelexperteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBuromobelexperte(props: BruBuromobelexperteProps): React.ReactElement;
export default BruBuromobelexperte;

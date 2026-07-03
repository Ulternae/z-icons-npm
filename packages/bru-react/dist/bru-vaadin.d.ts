import React from 'react';

export interface BruVaadinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVaadin(props: BruVaadinProps): React.ReactElement;
export default BruVaadin;

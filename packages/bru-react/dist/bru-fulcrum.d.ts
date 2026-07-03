import React from 'react';

export interface BruFulcrumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFulcrum(props: BruFulcrumProps): React.ReactElement;
export default BruFulcrum;

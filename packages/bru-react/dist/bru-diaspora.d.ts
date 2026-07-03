import React from 'react';

export interface BruDiasporaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDiaspora(props: BruDiasporaProps): React.ReactElement;
export default BruDiaspora;

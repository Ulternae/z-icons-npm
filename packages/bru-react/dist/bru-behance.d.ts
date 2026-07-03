import React from 'react';

export interface BruBehanceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBehance(props: BruBehanceProps): React.ReactElement;
export default BruBehance;

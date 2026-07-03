import React from 'react';

export interface BruLinkedinInProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLinkedinIn(props: BruLinkedinInProps): React.ReactElement;
export default BruLinkedinIn;

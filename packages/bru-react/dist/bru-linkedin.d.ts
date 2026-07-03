import React from 'react';

export interface BruLinkedinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLinkedin(props: BruLinkedinProps): React.ReactElement;
export default BruLinkedin;

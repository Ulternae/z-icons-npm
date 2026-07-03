import React from 'react';

export interface BruSquareLinkedinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareLinkedin(props: BruSquareLinkedinProps): React.ReactElement;
export default BruSquareLinkedin;

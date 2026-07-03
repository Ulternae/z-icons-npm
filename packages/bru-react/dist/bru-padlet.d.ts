import React from 'react';

export interface BruPadletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPadlet(props: BruPadletProps): React.ReactElement;
export default BruPadlet;

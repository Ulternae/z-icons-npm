import React from 'react';

export interface BruOsiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOsi(props: BruOsiProps): React.ReactElement;
export default BruOsi;

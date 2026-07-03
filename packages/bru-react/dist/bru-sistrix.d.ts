import React from 'react';

export interface BruSistrixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSistrix(props: BruSistrixProps): React.ReactElement;
export default BruSistrix;

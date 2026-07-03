import React from 'react';

export interface BruRenrenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRenren(props: BruRenrenProps): React.ReactElement;
export default BruRenren;

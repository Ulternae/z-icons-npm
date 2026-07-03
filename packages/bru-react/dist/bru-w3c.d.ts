import React from 'react';

export interface BruW3cProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruW3c(props: BruW3cProps): React.ReactElement;
export default BruW3c;

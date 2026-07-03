import React from 'react';

export interface BruAvianexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAvianex(props: BruAvianexProps): React.ReactElement;
export default BruAvianex;

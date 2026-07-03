import React from 'react';

export interface BruScreenpalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruScreenpal(props: BruScreenpalProps): React.ReactElement;
export default BruScreenpal;

import React from 'react';

export interface BruErlangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruErlang(props: BruErlangProps): React.ReactElement;
export default BruErlang;

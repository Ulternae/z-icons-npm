import React from 'react';

export interface BruPage4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPage4(props: BruPage4Props): React.ReactElement;
export default BruPage4;

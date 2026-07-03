import React from 'react';

export interface BruXingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruXing(props: BruXingProps): React.ReactElement;
export default BruXing;

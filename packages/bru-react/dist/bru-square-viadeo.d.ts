import React from 'react';

export interface BruSquareViadeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareViadeo(props: BruSquareViadeoProps): React.ReactElement;
export default BruSquareViadeo;

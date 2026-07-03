import React from 'react';

export interface BruCanadianMapleLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCanadianMapleLeaf(props: BruCanadianMapleLeafProps): React.ReactElement;
export default BruCanadianMapleLeaf;

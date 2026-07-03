import React from 'react';

export interface BruBraveReverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBraveReverse(props: BruBraveReverseProps): React.ReactElement;
export default BruBraveReverse;

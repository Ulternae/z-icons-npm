import React from 'react';

export interface BruCcJcbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcJcb(props: BruCcJcbProps): React.ReactElement;
export default BruCcJcb;

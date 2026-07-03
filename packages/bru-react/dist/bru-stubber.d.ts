import React from 'react';

export interface BruStubberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStubber(props: BruStubberProps): React.ReactElement;
export default BruStubber;

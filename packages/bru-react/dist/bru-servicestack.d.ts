import React from 'react';

export interface BruServicestackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruServicestack(props: BruServicestackProps): React.ReactElement;
export default BruServicestack;

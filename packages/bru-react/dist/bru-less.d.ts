import React from 'react';

export interface BruLessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLess(props: BruLessProps): React.ReactElement;
export default BruLess;

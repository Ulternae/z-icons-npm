import React from 'react';

export interface BruDeliciousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDelicious(props: BruDeliciousProps): React.ReactElement;
export default BruDelicious;

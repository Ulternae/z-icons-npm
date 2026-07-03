import React from 'react';

export interface BruDuolingoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDuolingo(props: BruDuolingoProps): React.ReactElement;
export default BruDuolingo;

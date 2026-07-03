import React from 'react';

export interface BruAccusoftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAccusoft(props: BruAccusoftProps): React.ReactElement;
export default BruAccusoft;

import React from 'react';

export interface BruThinkPeaksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruThinkPeaks(props: BruThinkPeaksProps): React.ReactElement;
export default BruThinkPeaks;

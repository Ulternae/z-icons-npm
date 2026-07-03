import React from 'react';

export interface BruResearchgateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruResearchgate(props: BruResearchgateProps): React.ReactElement;
export default BruResearchgate;

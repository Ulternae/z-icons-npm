import React from 'react';

export interface BruFreeCodeCampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFreeCodeCamp(props: BruFreeCodeCampProps): React.ReactElement;
export default BruFreeCodeCamp;

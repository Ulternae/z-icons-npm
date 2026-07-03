import React from 'react';

export interface BruUntappdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUntappd(props: BruUntappdProps): React.ReactElement;
export default BruUntappd;

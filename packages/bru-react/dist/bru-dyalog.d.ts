import React from 'react';

export interface BruDyalogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDyalog(props: BruDyalogProps): React.ReactElement;
export default BruDyalog;

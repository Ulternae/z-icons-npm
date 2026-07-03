import React from 'react';

export interface BruVuejsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVuejs(props: BruVuejsProps): React.ReactElement;
export default BruVuejs;

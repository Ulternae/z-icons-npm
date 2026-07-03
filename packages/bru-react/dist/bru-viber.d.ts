import React from 'react';

export interface BruViberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruViber(props: BruViberProps): React.ReactElement;
export default BruViber;

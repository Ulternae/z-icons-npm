import React from 'react';

export interface BruSlackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSlack(props: BruSlackProps): React.ReactElement;
export default BruSlack;

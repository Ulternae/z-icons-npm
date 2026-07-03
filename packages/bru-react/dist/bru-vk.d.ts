import React from 'react';

export interface BruVkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVk(props: BruVkProps): React.ReactElement;
export default BruVk;

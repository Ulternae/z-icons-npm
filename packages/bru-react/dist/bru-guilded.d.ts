import React from 'react';

export interface BruGuildedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGuilded(props: BruGuildedProps): React.ReactElement;
export default BruGuilded;

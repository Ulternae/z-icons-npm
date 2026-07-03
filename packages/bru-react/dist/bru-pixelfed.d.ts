import React from 'react';

export interface BruPixelfedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPixelfed(props: BruPixelfedProps): React.ReactElement;
export default BruPixelfed;

import React from 'react';

export interface BruBraveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBrave(props: BruBraveProps): React.ReactElement;
export default BruBrave;

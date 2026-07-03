import React from 'react';

export interface BruPeriscopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPeriscope(props: BruPeriscopeProps): React.ReactElement;
export default BruPeriscope;

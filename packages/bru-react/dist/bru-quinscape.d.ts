import React from 'react';

export interface BruQuinscapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruQuinscape(props: BruQuinscapeProps): React.ReactElement;
export default BruQuinscape;

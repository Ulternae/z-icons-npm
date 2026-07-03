import React from 'react';

export interface BruLeetcodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLeetcode(props: BruLeetcodeProps): React.ReactElement;
export default BruLeetcode;

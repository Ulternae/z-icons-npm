import React from 'react';

export interface LanHandScissorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandScissors(props: LanHandScissorsProps): React.ReactElement;
export default LanHandScissors;

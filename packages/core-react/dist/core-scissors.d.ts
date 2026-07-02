import React from 'react';

export interface CoreScissorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreScissors(props: CoreScissorsProps): React.ReactElement;
export default CoreScissors;

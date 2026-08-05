import React from 'react';

export interface MinaCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCopy(props: MinaCopyProps): React.ReactElement;
export default MinaCopy;

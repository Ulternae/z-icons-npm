import React from 'react';

export interface MinaBowlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBowl(props: MinaBowlProps): React.ReactElement;
export default MinaBowl;

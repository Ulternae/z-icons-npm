import React from 'react';

export interface MinaBrandFramerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandFramer(props: MinaBrandFramerProps): React.ReactElement;
export default MinaBrandFramer;

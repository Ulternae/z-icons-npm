import React from 'react';

export interface MinaBrandCodepenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandCodepen(props: MinaBrandCodepenProps): React.ReactElement;
export default MinaBrandCodepen;

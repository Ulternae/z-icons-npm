import React from 'react';

export interface MinaBellOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellOn(props: MinaBellOnProps): React.ReactElement;
export default MinaBellOn;

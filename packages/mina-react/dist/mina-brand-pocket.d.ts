import React from 'react';

export interface MinaBrandPocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandPocket(props: MinaBrandPocketProps): React.ReactElement;
export default MinaBrandPocket;

import React from 'react';

export interface MinaBrandInstagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandInstagram(props: MinaBrandInstagramProps): React.ReactElement;
export default MinaBrandInstagram;

import React from 'react';

export interface MinaBrandTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandTwitter(props: MinaBrandTwitterProps): React.ReactElement;
export default MinaBrandTwitter;

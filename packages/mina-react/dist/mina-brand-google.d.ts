import React from 'react';

export interface MinaBrandGoogleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandGoogle(props: MinaBrandGoogleProps): React.ReactElement;
export default MinaBrandGoogle;

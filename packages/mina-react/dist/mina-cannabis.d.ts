import React from 'react';

export interface MinaCannabisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCannabis(props: MinaCannabisProps): React.ReactElement;
export default MinaCannabis;

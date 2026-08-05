import React from 'react';

export interface MinaBookHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookHome(props: MinaBookHomeProps): React.ReactElement;
export default MinaBookHome;

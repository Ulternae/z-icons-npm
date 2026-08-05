import React from 'react';

export interface MinaHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHome(props: MinaHomeProps): React.ReactElement;
export default MinaHome;

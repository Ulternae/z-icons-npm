import React from 'react';

export interface MinaBellHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellHome(props: MinaBellHomeProps): React.ReactElement;
export default MinaBellHome;

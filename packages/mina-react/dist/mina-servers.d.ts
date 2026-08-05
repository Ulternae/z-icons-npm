import React from 'react';

export interface MinaServersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaServers(props: MinaServersProps): React.ReactElement;
export default MinaServers;

import React from 'react';

export interface MinaServersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaServers: React.FC<MinaServersProps>;
export default MinaServers;

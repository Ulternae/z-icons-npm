import React from 'react';

export interface LanShuttleVanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleVan: React.FC<LanShuttleVanProps>;
export default LanShuttleVan;

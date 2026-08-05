import React from 'react';

export interface LanShuttleVanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleVan(props: LanShuttleVanProps): React.ReactElement;
export default LanShuttleVan;

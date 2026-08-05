import React from 'react';

export interface LanVanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVan(props: LanVanProps): React.ReactElement;
export default LanVan;

import React from 'react';

export interface BruMedappsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMedapps(props: BruMedappsProps): React.ReactElement;
export default BruMedapps;

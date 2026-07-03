import React from 'react';

export interface BruDrupalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDrupal(props: BruDrupalProps): React.ReactElement;
export default BruDrupal;

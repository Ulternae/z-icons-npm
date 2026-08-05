import React from 'react';

export interface LanViharaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVihara(props: LanViharaProps): React.ReactElement;
export default LanVihara;

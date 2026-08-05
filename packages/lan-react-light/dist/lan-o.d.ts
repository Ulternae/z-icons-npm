import React from 'react';

export interface LanOProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanO(props: LanOProps): React.ReactElement;
export default LanO;

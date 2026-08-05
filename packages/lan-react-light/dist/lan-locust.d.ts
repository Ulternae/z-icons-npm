import React from 'react';

export interface LanLocustProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocust(props: LanLocustProps): React.ReactElement;
export default LanLocust;

import React from 'react';

export interface LanStroopwafelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStroopwafel(props: LanStroopwafelProps): React.ReactElement;
export default LanStroopwafel;

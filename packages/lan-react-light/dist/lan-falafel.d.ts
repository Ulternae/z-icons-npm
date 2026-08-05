import React from 'react';

export interface LanFalafelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFalafel(props: LanFalafelProps): React.ReactElement;
export default LanFalafel;

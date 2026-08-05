import React from 'react';

export interface LanMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMap(props: LanMapProps): React.ReactElement;
export default LanMap;

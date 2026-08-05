import React from 'react';

export interface LanMapMarkedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarked(props: LanMapMarkedProps): React.ReactElement;
export default LanMapMarked;

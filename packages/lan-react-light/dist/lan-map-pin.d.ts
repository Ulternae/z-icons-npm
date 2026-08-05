import React from 'react';

export interface LanMapPinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapPin(props: LanMapPinProps): React.ReactElement;
export default LanMapPin;

import React from 'react';

export interface LanMapPinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapPinThin(props: LanMapPinThinProps): React.ReactElement;
export default LanMapPinThin;

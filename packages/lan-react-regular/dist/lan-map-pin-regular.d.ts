import React from 'react';

export interface LanMapPinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapPinRegular(props: LanMapPinRegularProps): React.ReactElement;
export default LanMapPinRegular;

import React from 'react';

export interface BruUsbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUsb(props: BruUsbProps): React.ReactElement;
export default BruUsb;

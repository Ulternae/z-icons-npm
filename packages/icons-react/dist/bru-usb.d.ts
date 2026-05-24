import React from 'react';

export interface BruUsbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUsb: React.FC<BruUsbProps>;
export default BruUsb;

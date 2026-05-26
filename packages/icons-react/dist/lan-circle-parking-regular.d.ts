import React from 'react';

export interface LanCircleParkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleParkingRegular: React.FC<LanCircleParkingRegularProps>;
export default LanCircleParkingRegular;

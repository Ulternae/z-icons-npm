import React from 'react';

export interface LanCircleParkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleParkingRegular(props: LanCircleParkingRegularProps): React.ReactElement;
export default LanCircleParkingRegular;
